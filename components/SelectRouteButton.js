import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SelectRouteButton = (props) => {
  const navigation = useNavigation();
  const content = (
    <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Saved Routes", { screen: "Saved Routes" });
      }}
    >
      {content}
    </TouchableOpacity>
  );
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
