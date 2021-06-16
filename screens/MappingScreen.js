import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MappingComponent from "../components/MappingComponent";
import Icon from "react-native-vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import MapScreenButton from "../components/MapScreenButton";

function MappingScreen({ navigation, test1 }) {
  [test1, setTest1] = useState(true);

  const inPlaceText = (word, level) => {
    return `${word}: ${String(level)}`.padStart(20, " ");
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AntDesign
          name="delete"
          size={25}
          color="white"
          onPress={() => setTest1(test1 === true ? false : true)}
        />
      ),
    });
  }, [navigation, test1]);
  return (
    <View style={styles.container}>
      <MappingComponent testProp={test1}></MappingComponent>
      <View style={styles.detailContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{inPlaceText("Distance", "10km")}</Text>
          <Text style={styles.text}>{inPlaceText("Crowd", "High")}</Text>
        </View>
        <View style={styles.buttons}>
          <MapScreenButton text="Save" color="#54c0e8" />
          <MapScreenButton text="Start" color="#52f252" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  detailContainer: {
    backgroundColor: "white",
    height: "30%",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,
    borderTopColor: "lightgreen",
    borderTopWidth: 15,
    padding: 5,
  },

  textContainer: {
    marginBottom: 15,
    alignSelf: "flex-start",
  },

  text: {
    fontSize: 15,
    fontWeight: "bold",
  },

  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

const MappingStack = createStackNavigator();

function MappingStackScreen({ navigation }) {
  return (
    <MappingStack.Navigator
      screenOptions={{
        headerTitle: "Map Your Route",
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#f25260",
          fontSize: 20,
        },
      }}
    >
      <MappingStack.Screen
        name="MappingScreen"
        component={MappingScreen}
        options={{
          title: "Mapping",
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
    </MappingStack.Navigator>
  );
}

export default MappingStackScreen;
