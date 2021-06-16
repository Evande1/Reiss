import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import MapComponent from "../components/MapComponent";

const arr = [
  {
    startTime: "Mon Jun 15 2021 10:47:27 ",
    endTime: "Mon Jun 15 2021 10:47:27 ",
    totalDistance: "2.42",
    pace: "5:30",
    title: "Monday Morning Run",
    crowdLevel: "High",
    dangers: "NIL",
    remarks: "very good",
    directions:
      "[{'origin' : {'longitude' : '1.362063609552904' , 'latitude' : '103.69956604782682'}, 'destination' : {'longitude' : '1.3367505787994702' , 'latitude' : '103.72342697847203'}  }]",
  },
  {
    startTime: "Tue Jun 16 2021 10:47:27  ",
    endTime: "Tue Jun 16 2021 10:47:27  ",
    totalDistance: "2.42",
    pace: "5:30",
    title: "Tuesday Morning Run",
    crowdLevel: "High",
    dangers: "NIL",
    remarks: "very good",
    directions:
      "[{'origin' : {'longitude' : '1.362063609552904' , 'latitude' : '103.69956604782682'}, 'destination' : {'longitude' : '1.3367505787994702' , 'latitude' : '103.72342697847203'}  }]",
  },
  {
    startTime: "Wed Jun 17 2021 10:47:27  ",
    endTime: "Wed Jun 17 2021 10:47:27  ",
    totalDistance: "2.42",
    pace: "5:30",
    title: "Wednesday Morning Run",
    crowdLevel: "High",
    dangers: "NIL",
    remarks: "very good",
    directions:
      "[{'origin' : {'longitude' : '1.362063609552904' , 'latitude' : '103.69956604782682'}, 'destination' : {'longitude' : '1.3367505787994702' , 'latitude' : '103.72342697847203'}  }]",
  },
];

function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={arr}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <TouchableOpacity style={styles.buttonsStyle}>
                <View style={styles.itemContainer}>
                  <View>
                    <Text>
                      <Icon name="md-person-outline" size={25}>
                        <Text>User</Text>
                      </Icon>
                      <Text style={{ fontWeight: "bold" }}>
                        {"\n"}
                        {item.title}
                      </Text>
                      <Text>
                        {"\n"}
                        {item.startTime}
                        {"\n"}Crowd Level:{" "}
                      </Text>
                      <Text style={{ fontWeight: "bold" }}>
                        {item.crowdLevel}
                        {"\n"}
                      </Text>
                      <Text>Dangers:</Text>
                      <Text style={{ fontWeight: "bold" }}>{item.dangers}</Text>
                      <Text>
                        {"\n"}
                        Pace: {item.pace}
                        {"\n"}
                        Total Distance: {item.totalDistance}
                      </Text>
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <MapComponent mapWidth="0.5" mapHeight="0.3"></MapComponent>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}
const FeedStack = createStackNavigator();

const FeedStackScreen = ({ navigation }) => (
  <FeedStack.Navigator
    screenOptions={{
      headerTitle: "Feed",
      headerStyle: {
        backgroundColor: "white",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "800",
        color: "#f25260",
        fontSize: 20,
      },
    }}
  >
    <FeedStack.Screen
      name="Feed"
      component={FeedScreen}
      options={{
        title: "Feed",
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
  </FeedStack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  tag: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "white",
    width: "100%",
    height: "90%",
    padding: 3,
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "black",
    backgroundColor: "white",
    width: "100%",
    height: 300,
  },
});

export default FeedStackScreen;
