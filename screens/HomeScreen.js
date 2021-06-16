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
import RunningScreen from "./RunningScreen";

function HomeScreen({ navigation }) {
  const [inModalMode, setInModalMode] = useState(false);

  const cancelInModalMode = () => setInModalMode(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AntDesign
          name="pluscircleo"
          size={24}
          color="black"
          style={{right:10}}
          onPress={() =>
            navigation.navigate("Mapping", { screen: "MappingScreen" })
          }
        />
      ),
    });
  }, []);

  const text1 = `Good Morning User`.toUpperCase();
  const text2 = "The grind don't stop".toUpperCase();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{text1}</Text>
        <Text style={styles.text2}>{text2}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.map}>
          <MapComponent mapWidth="1" mapHeight="0.9"></MapComponent>
        </View>
        <View>
          <StartButtonHome
            text="Start"
            color="black"
            onPress={() => setInModalMode(true)}
          />
        </View>
      </View>
      <SelectRoute
        text="S art"
        visible={inModalMode}
        onCancel={cancelInModalMode}
      />
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

  textContainer: {
    height: 50,
    justifyContent: "flex-start",
  },

  text1: {
    color: "black",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "700",
  },

  text2: {
    color: "black",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "300",
  },

  body: {
    width: "100%",
    maxHeight: "90%",
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  map: {
    flex: 1,
  },

  startButton: {
    width: "80%",
    backgroundColor: "#2DC7F8",
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
        headerTitle: "SAFETracks",
        headerStyle: {
          backgroundColor: "white",
        },

        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "900",
          color: "#f25260", 
          fontSize: 27,
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
              backgroundColor="white"
              color="black"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
      <Stack.Screen
        name="Run"
        component={RunningScreen}
        options={{
          title: "Run",
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
