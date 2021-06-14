import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SelectRoute from "../components/SelectRoute";
import ComponentButton from "../components/ComponentButton";

function HomeScreen({ navigation }) {
  const [inModalMode, setInModalMode] = useState(false);

  const cancelInModalMode = () => setInModalMode(false);

  const username = "JYP";
  const text1 = `Good Morning ${username}`.toUpperCase();
  const text2 = "The grind don't stop".toUpperCase();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}> App Name</Text>
      </View>

      <View style={styles.startPopUp}>
        <View>
          <Text style={styles.startPopUpText1}>{text1}</Text>
          <Text style={styles.startPopUpText2}>{text2}</Text>
        </View>
        <ComponentButton
          text="Start"
          color="black"
          onPress={() => setInModalMode(true)}
        />
        <SelectRoute visible={inModalMode} onCancel={cancelInModalMode} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },

  header: {
    width: "100%",
    maxHeight: "10%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D2027",
  },

  headerText: {
    fontWeight: "bold",
    color: "white",
  },

  startPopUp: {
    width: "100%",
    maxHeight: "30%",
    backgroundColor: "#f48731",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  startPopUpText1: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },

  startPopUpText2: {
    color: "black",
    fontSize: 20,
  },

  startButton: {
    width: "80%",
    backgroundColor: "black",
    color: "white",
    padding: 20,
    borderRadius: 30,
  },
});

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title='Go to notifications'
//       />
//       <Button onPress={() => navigation.openDrawer()} title='open ' />
//     </View>
//   );
// }

export default HomeScreen;
