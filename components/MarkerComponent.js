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
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

{
  /* <Entypo name="traffic-cone" size={24} color="black" /> */
  // <Ionicons name="people" size={24} color="black" />
  // <Entypo name="circle-with-cross" size={24} color="black" />
}

const MarkerComponent = (props) => {
  const dangerType = function () {
    const dangerTypeCheck = props.text.toLowerCase().split(" ")[0][0];
    if (dangerTypeCheck === "h") {
      return "people";
    } else if (dangerTypeCheck === "r") {
      return "construct";
    } else if (dangerTypeCheck === "u") {
      return "alert-circle";
    }
  };

  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      transparent={true}
      onRequestClose={props.onCancel}
    >
      <TouchableOpacity style={styles.modalContainer} onPress={props.onCancel}>
        <TouchableOpacity style={styles.modal} activeOpacity={1}>
          <View style={styles.hazardContainer}>
            <View>
              <Text style={styles.danger}>Danger: {props.text}</Text>
            </View>
            <Ionicons name={dangerType()} size={40} color="black" />
          </View>
          <View style={styles.timeStampContainer}>
            <Text style={styles.timeStamp}>Submitted on: 15 June 03:00 PM</Text>
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
    height: "25%",
    marginTop: "auto",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#e03a3a",
    borderRadius: 20,
  },

  hazardContainer: {
    width: 550,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  danger: {
    fontSize: 15,
    fontWeight: "bold",
  },

  timeStampContainer: {
    width: 550,
    alignItems: "center",
    fontWeight: "600",
  },
});

export default MarkerComponent;
