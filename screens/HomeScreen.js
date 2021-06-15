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
import StartButton from "../components/StartButton";

function HomeScreen({ navigation }) {
  const [inModalMode, setInModalMode] = useState(false);

  const cancelInModalMode = () => setInModalMode(false);

  const SelectRoutes = () => {
    cancelInModalMode();
    navigation.navigate("PastRoutes");
  };

  const username = "JYP";
  const text1 = `Good Morning ${username}`.toUpperCase();
  const text2 = "The grind don't stop".toUpperCase();

  return (
    <View style={styles.container}>
      <View style={styles.startPopUp}>
        <View>
          <Text style={styles.startPopUpText1}>{text1}</Text>
          <Text style={styles.startPopUpText2}>{text2}</Text>
        </View>
        <StartButton
          text="Start"
          color="black"
          onPress={() => setInModalMode(true)}
        />
        <SelectRoute
          visible={inModalMode}
          onCancel={cancelInModalMode}
          goPastRoutes={goPastRoutes}
          goMappedRoutes={goMappedRoutes}
        />
      </View>
    </View>
  );
}

function PastRoutes() {
  return <Text>Past Routes Screen</Text>;
}

function MappedRoutes() {
  return <Text>Mapped Routes Screen</Text>;
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
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
    maxHeight: "90%",
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  startPopUpText1: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
  },

  startPopUpText2: {
    color: "black",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "300",
  },

  startButton: {
    width: "80%",
    backgroundColor: "black",
    color: "white",
    padding: 20,
    borderRadius: 30,
  },
});

const Stack = createStackNavigator();

export default function HomeScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PastRoutes" component={PastRoutes} />
      <Stack.Screen name="MappedRoutes" component={MappedRoutes} />
    </Stack.Navigator>
  );
}

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
