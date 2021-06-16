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
              text="Select Route"
              color={styles.modalContainer.backgroundColor}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Running Screen")}
            >
              <Text>Start</Text>
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
});

export default SelectRoute;
