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
import MapComponent from '../components/MapComponent';


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
        Recent Runs
      </Text>
    </View>
  );
};

function HistoryScreen({ navigation }) {
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
                      {"\n"}
                      {item.startTime}
                      {"\n"}Crowd Level:{" "}
                    </Text>
                    <Text style={styles.text}>
                      {item.crowdLevel}
                      {"\n"}
                    </Text>
                    <Text>Dangers:</Text>
                    <Text style={styles.text}>{item.dangers}</Text>
                    <Text>
                      {"\n"}
                      Pace: {item.pace}
                      {"\n"}
                      Total Distance: {item.totalDistance}
                    </Text>
                  </View>
                  <View>
                   <MapComponent mapWidth='0.5' mapHeight='0.3'></MapComponent>

                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
          ListHeaderComponent={FlatListHeader}
        />
      </View>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
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

const HistoryStack = createStackNavigator();
const HistoryStackScreen = ({ navigation }) => (
  <HistoryStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HistoryStack.Screen
      name="History"
      component={HistoryScreen}
      options={{
        title: "History",
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
  </HistoryStack.Navigator>
);

export default HistoryStackScreen;

