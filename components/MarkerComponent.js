import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TouchableOpacity,
} from "react-native";

import SelectRouteButton from "./SelectRouteButton";
import StartButtonHome from "./StartButtonHome";

const MarkerComponent = (props) => {
  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      transparent={true}
      onRequestClose={props.onCancel}
    >
      <TouchableOpacity style={styles.modalContainer} onPress={props.onCancel}>
        <TouchableOpacity style={styles.modal} activeOpacity={1}>
          <View>
            <Text style={styles.danger}>Dangers: {props.text}</Text>
            <Text style={styles.timestamp}>Submitted on: 15 June 3 PM</Text>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    width: "100%",
    height: "30%",
    marginTop: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2689b",
    borderRadius: 20,
  },

  danger: {
    fontSize: 35,
    borderWidth: 2,
    borderColor: "red",
    borderStyle: "dotted",
  },

  timestamp: {},
});

export default MarkerComponent;
