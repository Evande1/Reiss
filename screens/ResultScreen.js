import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import MapComponent from "../components/MapComponent";

function ResultScreen({ navigation }) {
  const renderHeader = () => (
    <View
      style={{
        backgroundColor: "#FF576B",
        padding: 12,
        height: 400,
        borderRadius: 34,
        flex: 1,
      }}
    >
      <View
        style={{
          height: 450,
        }}
      >
        <View style={styles.time}>
          <View style={styles.resultbig}>
            <View>
              <Ionicons
                name="time-outline"
                size={36}
                color="black"
                style={{ marginTop: 8 }}
              />
            </View>
            <View style={{ alignContent: "center" }}>
              <Text style={styles.bigtext}>12:25</Text>
            </View>
          </View>

          <View style={styles.resultbig}>
            <View>
              <FontAwesome5
                name="walking"
                size={38}
                color="black"
                style={{ marginTop: 8, marginRight: 8 }}
              />
            </View>
            <View style={{ alignContent: "center" }}>
              <Text style={styles.bigtext}>2.40km</Text>
            </View>
          </View>
        </View>

        <View style={styles.report}>
          <View style={{ flex: 3 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <View
                style={{ flex: 1.5, alignItems: "flex-end", marginRight: 8 }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "800",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  Crowd Level:
                </Text>
              </View>

              <View style={{ flex: 1.5 }}>
                <TouchableOpacity style={styles.question}>
                  <Text style={{ fontSize: 15 }}>High</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1.5 }}>
                <TouchableOpacity style={styles.question}>
                  <Text style={{ fontSize: 15 }}>Med</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1.5 }}>
                <TouchableOpacity style={styles.question}>
                  <Text style={{ fontSize: 15 }}>Low</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text>{"\n"}</Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <View
                style={{ flex: 1.5, alignItems: "flex-end", marginRight: 8 }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "800",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  Dangers:
                </Text>
              </View>

              <View style={{ flex: 1.5 }}>
                <TouchableOpacity style={styles.question}>
                  <Text style={{ fontSize: 15 }}>Yes</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1.5 }}>
                <TouchableOpacity style={styles.question}>
                  <Text style={{ fontSize: 15 }}>No</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1.5 }}>
                <Text></Text>
              </View>
            </View>

            <View>
              <Text>{"\n"}</Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <View style={{ flex: 1, alignItems: "flex-end", marginRight: 8 }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "800",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  Remarks:
                </Text>
              </View>

              <View style={{ flex: 3 }}>
                <TouchableOpacity
                  style={{
                    padding: 1,
                    backgroundColor: "#EB9393",
                    borderRadius: 23,
                    alignItems: "center",
                    width: "98%",
                    height: "50%",
                  }}
                >
                  <Text style={{ fontSize: 15 }}>remarks</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <View>
        <MapComponent mapWidth="1" mapHeight="0.8"></MapComponent>
      </View>
      <View
        style={{
          flex: 1,

          alignItems: "center",
          justifyContent: "center",
          elevation: 0,
        }}
      >
        <Button title="Results" onPress={() => sheetRef.current.snapTo(0)} />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[350, 350, 0]}
        renderHeader={renderHeader}
        enableContentTapInteraction={false}
      />
    </>
  );
}
const ResultStack = createStackNavigator();

const ResultStackScreen = ({ navigation }) => (
  <ResultStack.Navigator
    screenOptions={{
      headerTitle: "Result",
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
    <ResultStack.Screen
      name="Result"
      component={ResultScreen}
      options={{
        title: "Result",
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
  </ResultStack.Navigator>
);

const styles = StyleSheet.create({
  time: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
    flex: 1,
    height: "50%",
  },

  resultbig: {
    alignItems: "flex-start",
    flex: 1,
    flexDirection: "row",
    marginBottom: 2,
  },
  bigtext: {
    fontWeight: "800",
    fontSize: 40,
  },
  report: {
    width: "100%",

    justifyContent: "center",
    flex: 3,
  },
  question: {
    width: 83,
    height: 20,
    padding: 1,
    backgroundColor: "#EB9393",
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    alignItems: "center",
    fontSize: 24,
    fontWeight: "800",
  },
});

export default ResultStackScreen;
