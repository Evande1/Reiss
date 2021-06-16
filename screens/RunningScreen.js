import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";
import StopWatch from "../components/StopWatchComponent";

function RunningScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.pace}>
        <View>
          <Text style={styles.heading}>4:43</Text>
          <Text style={styles.paceDetails}>Average pace</Text>
        </View>
        <View>
          <Text style={styles.heading}>5:15</Text>
          <Text style={styles.paceDetails}>Current Pace</Text>
        </View>
      </View>
      <Text style={styles.distance}>2.53</Text>
      <Text style={styles.distanceMatric}>Kilometers</Text>
      <View style={styles.bottom}>
        <StopWatch></StopWatch>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nomralText: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  image: {
    marginTop: 50,
  },
  heading: {
    ...{
      marginTop: 40,
      fontSize: 40,
    },
  },
  text: {
    ...{
      marginHorizontal: 8,
      marginVertical: 10,
    },
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
  },
  pace: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  distance: {
    fontSize: 50,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50%",
  },
  distanceMatric: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default RunningScreen;
