import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper';
import { useMediaQuery } from 'react-responsive';
//import Navigation from './src/Navigation';

import Navigation from './src/navigation/';


const theme = {
  ...MD3DarkTheme, // or MD3DarkTheme
  roundness: 3,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#3498db',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
    text:'white'
  },
};


export default function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
  },
});
