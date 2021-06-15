import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const MapScreenButton = (props) => {
  const content = (
    <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    width: 180,
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 15,
  },
});

export default MapScreenButton;
