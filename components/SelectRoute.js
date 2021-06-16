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
import { useNavigation } from "@react-navigation/native";

const SelectRoute = (props) => {
  const navigation = useNavigation();
  const text = props.text;
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
              onCancel={props.onCancel}
              text="Select Route"
              color={styles.modalContainer.backgroundColor}
              onPress={() =>
                navigation.navigate("Saved Routes", { screen: "Saved Routes" })
              }
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                props.onCancel();
                navigation.navigate("Running Screen");
              }}
              style={styles.button}
            >
              <Text style={styles.text}>Start</Text>
            </TouchableOpacity>
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
  button: {
    backgroundColor: "black",
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

export default SelectRoute;
