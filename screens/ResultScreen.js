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

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import MapComponent from '../components/MapComponent';


function ResultScreen({ navigation }) {
  const renderHeader = () => (
    <View
      style={{
        backgroundColor: "#F84061",
        padding: 5,
        height: 400,
        borderRadius: 34,
        flex: 1,
      }}
    >
      <View style={styles.time}>
        <View style={styles.resultbig}>
          <View>
            <Ionicons name="time-outline" size={36} color="black" />
          </View>
          <View style={{ alignContent: "center" }}>
            <Text style={styles.bigtext}>'12,25'</Text>
          </View>
        </View>

        <View style={styles.resultbig}>
          <View>
            <FontAwesome5 name="walking" size={38} color="black" />
          </View>
          <View style={{ alignContent: "center" }}>
            <Text style={styles.bigtext}>2.40km</Text>
          </View>
        </View>
      </View>

      <View style={styles.report}>
        <View
          style={{
            alignItems: "center",
            fontSize: 24,
            fontWeight: "800",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "800" }}>Report</Text>
        </View>

        <View style={{ flex: 1 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View style={{ flex: 1.5 }}>
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
                <Text style={{ fontSize: 15 }}>high</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1.5 }}>
              <TouchableOpacity style={styles.question}>
                <Text style={{ fontSize: 15 }}>med</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1.5 }}>
              <TouchableOpacity style={styles.question}>
                <Text style={{ fontSize: 15 }}>low</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View style={{ flex: 1.5 }}>
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
                <Text style={{ fontSize: 15 }}>high</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1.5 }}>
              <TouchableOpacity style={styles.question}>
                <Text style={{ fontSize: 15 }}>med</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1.5 }}>
              <TouchableOpacity style={styles.question}>
                <Text style={{ fontSize: 15 }}>low</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text>Dangers:</Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>High</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Mid</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Low</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
    <View><MapComponent mapWidth="1" mapHeight="0.8"></MapComponent></View>
      <View
        style={{
          flex: 1,

          alignItems: 'center',
          justifyContent: 'center',
          elevation:0,
        }}
      >
        <Button
          title="Results"
          onPress={() => sheetRef.current.snapTo(0)}
        />

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
        fontWeight: "bold",
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
    flex: 1,
  },

  resultbig: {
    alignItems: "flex-start",
    flex: 1,
    padding: 5,
  },
  bigtext: {
    fontWeight: "800",
    fontSize: 52,
  },
  report: {
    width: "100%",
    justifyContent: "center",
    flex: 2,
  },
  question: {
    width: 83,
    height: 20,
    padding: 1,
    backgroundColor: "#EB9393",
    borderRadius: 23,
    alignItems: "center",
  },

  header: {
    alignItems: "center",
    fontSize: 24,
    fontWeight: "800",
  },
});

export default ResultStackScreen;
