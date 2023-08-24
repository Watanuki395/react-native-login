import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Welcome"  screenOptions={{
             cardStyle: {
            backgroundColor: '#0e1529'
          },
          headerShown: false
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegistrationScreen} />
        {/* Agrega más pantallas aquí */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}