import React from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";
import ComponentButton from "./ComponentButton";

const SelectRoute = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View>
          <ComponentButton text="Popular Routes" color="black" />
        </View>
        <View>
          <ComponentButton text="Run your own route" color="black" />
        </View>
        <View>
          <ComponentButton
            text="Go back"
            color="red"
            onPress={props.onCancel}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#f48731",
  },
});

export default SelectRoute;
