import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const StartButton = (props) => {
  const content = (
    <View style={styles.button}>
      <Text style={styles.text}>Start</Text>
    </View>
  );

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#52f252",
    width: 300,
    padding: 20,
    borderRadius: 30,
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 20,
  },
});

export default StartButton;
