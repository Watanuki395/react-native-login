import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TextInput, Button, Title, Snackbar } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {signup} from '../firebase/api'
import LoadingScreen from '../components/LoadingScreen'
import CustumAlert from '../components/CustomAlert'


function RegistrationScreen({ navigation }) {
  
  const ERROR_CODE_ACCOUNT_EXISTS = "auth/email-already-in-use";
  const ERROR_MSG_ACCOUNT_EXISTS = `
    Una cuenta con este correo electronico ya existe.
  `;

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

   const handleRegistration = async (values) => {
      setError(false);
      const data = {
        fname: values.fullName,
        email: values.email,
      };
    try {
      setLoading(true);
      await signup(values.email, values.password, data).then(()=>{
        setShowSnackbar(true);
        setLoading(false);
        navigation.navigate('Login')
      }).catch((error)=>{
        if(error.code = ERROR_CODE_ACCOUNT_EXISTS){
          setErrorMsg(ERROR_MSG_ACCOUNT_EXISTS);
          setError(true);
          setShowSnackbar(false);
          setLoading(false);
        }
      })
     
    } catch (error) {
      setErrorMsg(error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeIn" style={styles.content}>
        <Title style={styles.title}>Registro</Title>
        <Formik
          initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            handleRegistration(values);
            resetForm();
          }}
        >
          {({ handleChange, handleSubmit, values, errors, isSubmitting, touched }) => (
            <>
              <TextInput
                label="Nombre completo"
                value={values.fullName}
                onChangeText={handleChange('fullName')}
                style={styles.input}
                mode="outlined"
                disabled={isSubmitting}
                left={<TextInput.Icon icon='account'/>}
              />
              {Boolean(errors.fullName) && Boolean(touched.fullName) && <Text style={styles.errors} >{errors.fullName}</Text>}
              <TextInput
                label="Correo"
                value={values.email}
                onChangeText={handleChange('email')}
                style={styles.input}
                mode="outlined"
                left={<TextInput.Icon icon='at'/>}
              />
              {Boolean(errors.email) && Boolean(touched.email) && <Text style={styles.errors}>{errors.email}</Text>}
              <TextInput
                label="Contraseña"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry
                style={styles.input}
                mode="outlined"
              />
              {Boolean(errors.password) && Boolean(touched.password) && <Text style={styles.errors}>{errors.password}</Text>}
              <TextInput
                label="Confirmar Contraseña"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                secureTextEntry
                style={styles.input}
                mode="outlined"
              />
              {Boolean(errors.confirmPassword) && Boolean(touched.confirmPassword) && <Text style={styles.errors}>{errors.confirmPassword}</Text>}
              <Button mode="contained" onPress={handleSubmit} style={styles.registerButton} disabled={isSubmitting}>
                Registrarse
              </Button>
            </>
          )}
        </Formik>
        <Button
          mode="outlined"
          icon="arrow-left"
          onPress={() => navigation.navigate('Login')}
          style={styles.loginButton}
        >
          Regresar
        </Button>
      </Animatable.View>
      <CustumAlert
          visible={showSnackbar}
          onDismiss={() => setShowSnackbar(false)}
          type={error ? 'error' : 'success'}
          message={error ? errorMsg : 'Se registro correctamente'}
        >
        </CustumAlert>
      <LoadingScreen visible={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems:'center',

  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 10,
    alignItems:'center',
    width:'100%'
  },
  title: {
    marginBottom: 20,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
    width:'100%'
  },
  registerButton: {
    marginTop: 10,
  },
  loginButton: {
    marginTop: 10,
    borderColor: 'white',
  },
  errors: {
    color:'red'
  }
});

export default RegistrationScreen;
