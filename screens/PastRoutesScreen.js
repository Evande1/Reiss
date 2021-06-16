import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import MapComponent from "../components/MapComponent";

const arr = [
  {
    startTime: "Mon Jun 15 2021 10:47:27 ",
    endTime: "Mon Jun 15 2021 10:47:27 ",
    totalDistance: "2.42",
    pace: "5:30",
    title: "Run at Bukit Timah Hill",
    crowdLevel: "High",
    dangers: "NIL",
    remarks: "Nice Scenery",
    directions:
      "[{'origin' : {'longitude' : '1.362063609552904' , 'latitude' : '103.69956604782682'}, 'destination' : {'longitude' : '1.3367505787994702' , 'latitude' : '103.72342697847203'}  }]",
  },
  {
    startTime: "Tue Jun 16 2021 10:47:27  ",
    endTime: "Tue Jun 16 2021 10:47:27  ",
    totalDistance: "4.5",
    pace: "6:15",
    title: "Run around the neighbourhood",
    crowdLevel: "High",
    dangers: "NIL",
    remarks: "High Elevation",
    directions:
      "[{'origin' : {'longitude' : '1.362063609552904' , 'latitude' : '103.69956604782682'}, 'destination' : {'longitude' : '1.3367505787994702' , 'latitude' : '103.72342697847203'}  }]",
  },
  {
    startTime: "Wed Jun 17 2021 10:47:27  ",
    endTime: "Wed Jun 17 2021 10:47:27  ",
    totalDistance: "8.62",
    pace: "7:10",
    title: "Sunday run with Friends",
    crowdLevel: "High",
    dangers: "NIL",
    remarks: "Windy Route",
    directions:
      "[{'origin' : {'longitude' : '1.362063609552904' , 'latitude' : '103.69956604782682'}, 'destination' : {'longitude' : '1.3367505787994702' , 'latitude' : '103.72342697847203'}  }]",
  },
];

const FlatListHeader = () => {
  return (
    <View
      elevation={1}
      style={{
        height: 100,
        width: 1000,
        margin: 5,
        backgroundColor: "#fff",
        alignSelf: "center",
      }}
    >
      <Text
        style={{
          fontSize: 40,
          fontWeight: "800",
          flex: 1,
          alignSelf: "center",
          paddingTop: 30,
          fontSize: 40,
        }}
      >
        Saved Routes
      </Text>
    </View>
  );
};

function PastRoutesScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={arr}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <TouchableOpacity>
                <View style={styles.itemContainer}>
                  <View>
                    <Text style={styles.text}>{item.title}</Text>
                    <Text>
                      Average Pace: {item.pace}
                      {"\n"}
                      Total Distance: {item.totalDistance}
                      {"\n"}
                      Remarks: {item.remarks}
                      {"\n"}
                      Total Attempts: 21
                    </Text>
                  </View>
                  <View>
                    <MapComponent mapWidth="0.5" mapHeight="0.3"></MapComponent>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
          ListHeaderComponent={FlatListHeader}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "black",
    backgroundColor: "white",
    width: "100%",
    height: 300,
  },

  text: {
    fontWeight: "bold",
  },

  image: {
    width: 100,
    height: 100,
  },
});

const PastRoutesStack = createStackNavigator();
const PastRoutesStackScreen = ({ navigation }) => (
  <PastRoutesStack.Navigator
    screenOptions={{
      headerTitle: "Saved Routes",
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
    <PastRoutesStack.Screen
      name="Saved Routes"
      component={PastRoutesScreen}
      options={{
        title: "Saved Routes",
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
  </PastRoutesStack.Navigator>
);

export default PastRoutesStackScreen;
