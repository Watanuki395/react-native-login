import React from 'react';
import { Snackbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const CustumAlert = ({ visible, onDismiss, message, type }) => {
  const backgroundColor = type === 'success' ? '#43a047' : '#e53935'; // Success: Green, Error: Red
  const textColor = '#fff'; // White

  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={9000} // Duración en milisegundos
      style={{
            backgroundColor, 
            position:'absolute', 
            justifyContent: "center",  
            alignItems: "center", 
            width: "99%", 
            bottom: 30,
            }}
      action={{ label: 'Cerrar', onPress: onDismiss, color: textColor }}
    >
      {message}
    </Snackbar>
  );
};

export default CustumAlert;
