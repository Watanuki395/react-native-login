import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Button, Title, Subheading } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { useMediaQuery } from 'react-responsive';

const backgroundImage = require('../imgs/secretSanta.jpeg'); // Ruta correcta de la imagen

function HomeScreen({ navigation }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={isMobile ? styles.mobileContainer : styles.desktopContainer}>
        <Animatable.View animation="fadeIn" style={styles.content}>
          <Title style={styles.title}>¡Bienvenido al Amigo Secreto!</Title>
          <Subheading style={styles.subtitle}>
            Disfruta de la emoción de intercambiar regalos de manera única.
          </Subheading>
          <Button mode="contained" onPress={() => navigation.navigate('Login')} style={styles.button} uppercase>
            Iniciar
          </Button>
        </Animatable.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  desktopContainer: {
    display:'flex',
    flexDirection:'column',
    margin: 0,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  mobileContainer: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    marginBottom: 10,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: 20,
    color: 'white',
    fontSize: 18,
  },
  button: {
    marginTop: 10,
  },
});

export default HomeScreen;
