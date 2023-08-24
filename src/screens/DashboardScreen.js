import React from 'react';
import { View, Text, Button } from 'react-native';


const HomeLoggedInScreen = ({ navigation }) => {
 

  return (
    <View>
      <Text>Bienvenido(a) usuario</Text>
      <Button title="Cerrar sesión" />
    </View>
  );
};

export default HomeLoggedInScreen;
