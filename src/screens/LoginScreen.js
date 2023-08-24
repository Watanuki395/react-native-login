import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title, Subheading, Snackbar } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';


function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [hidePassIcon, setHidePassIcon] = useState('eye-outline');
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleLogin = () => {
    // Lógica para iniciar sesión
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeIn" style={styles.content}>
        <Title style={styles.title}>Iniciar Sesión</Title>
        <Subheading style={styles.subtitle}>Ingresa tus datos para continuar</Subheading>
        <TextInput
          label="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
          left={<TextInput.Icon icon='at'/>}
        />
        <TextInput
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={hidePass}
          style={styles.input}
          mode="outlined"
          right={<TextInput.Icon icon={hidePassIcon} onPress={() => {setHidePass(!hidePass), setHidePassIcon(hidePass?'eye-off-outline':'eye-outline')}}/>}
        />
        <Button mode="contained" onPress={handleLogin} style={styles.loginButton}>
          Iniciar Sesión
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate('Register')} style={styles.registerButton}>
          Registrarse
        </Button>
        
        {/* Botón para regresar a HomeScreen */}
        <Button mode="text" onPress={() => navigation.navigate('Welcome')}>
          Regresar a Home
        </Button>
      </Animatable.View>
      <Snackbar
          visible={showSnackbar}
          onDismiss={() => setShowSnackbar(false)}
          duration={3000}
          style={styles.snackbar}
        >
          Inicio de sesión exitoso.
        </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: 'center',
    padding: 15
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 10,
    alignItems:'center',
  },
  title: {
    marginBottom: 10,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    marginBottom: 20,
    color: 'white',
    fontSize: 16,
  },
  input: {
    marginBottom: 15,
    width:'100%'
  },
  loginButton: {
    margin: 10,
  },
  registerButton: {
    margin: 10,
    borderColor: 'white', 
  },
  snackbar: {
    position: 'absolute',
    bottom: 0, // Ajusta el valor según sea necesario
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;