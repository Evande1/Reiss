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
import StartButton from "./StartButton";

const SelectRoute = (props) => {
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
            <SelectRouteButton
              text="Select Route"
              color={styles.modalContainer.backgroundColor}
            />
          </View>
          <View>
            <StartButton text="Start" color="black" />
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
});

export default SelectRoute;
