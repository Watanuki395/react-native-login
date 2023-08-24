import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const LoadingScreen = ({ visible }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.container}>
        <ActivityIndicator
          animating={true}
          color={MD2Colors.blue600}
          size={99}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", 
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default LoadingScreen;
