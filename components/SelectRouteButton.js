import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const SelectRouteButton = (props) => {
  const content = (
    <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    width: 300,
    padding: 20,
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 20,
  },
});

export default SelectRouteButton;
