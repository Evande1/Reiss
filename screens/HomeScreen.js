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
import StartButtonHome from "../components/StartButtonHome";
import Icon from "react-native-vector-icons/Ionicons";
import MapComponent from "../components/MapComponent";
import { AntDesign } from "@expo/vector-icons";

function HomeScreen({ navigation }) {
  const [inModalMode, setInModalMode] = useState(false);

  const cancelInModalMode = () => setInModalMode(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AntDesign
          name="pluscircleo"
          size={24}
          color="white"
          onPress={() =>
            navigation.navigate("Mapping", { screen: "MappingScreen" })
          }
        />
      ),
    });
  }, []);

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
        <MapComponent mapWidth="1" mapHeight="1"></MapComponent>
        <StartButtonHome
          text="Start"
          color="black"
          onPress={() => setInModalMode(true)}
        />
        <SelectRoute
          text="Start"
          visible={inModalMode}
          onCancel={cancelInModalMode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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

export default function HomeScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#009387",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
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

// const HomeStack = createStackNavigator();
// const HomeStackScreen = ({ navigation }) => (
//   <HomeStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#009387',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}
//   >
//     <HomeStack.Screen
//       name='Home'
//       component={HomeScreen}
//       options={{
//         title: 'Home',
//         headerLeft: () => (
//           <Icon.Button
//             name='ios-menu'
//             size={25}
//             backgroundColor='#009387'
//             onPress={() => navigation.openDrawer()}
//           ></Icon.Button>
//         ),
//       }}
//     />
//   </HomeStack.Navigator>
// );

// export default HomeStackScreen;

