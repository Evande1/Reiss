import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapViewDirections from "react-native-maps-directions";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MarkerComponent from "./MarkerComponent";

const GOOGLE_MAPS_APIKEY = "AIzaSyCve7vFBOjV4kK_DwhSHnn2JF-hXAPeszw";

const data = {
  Route: {
    startTime: "Tue Jun 15 2021 10:47:27 GMT+0800",
    endTime: "Tue Jun 15 2021 10:47:27 GMT+0800",
    totalDistance: "2.42",
    pace: "5:30",
    title: "Monday Morning Run",
    crowdLevel: "High",
    dangers: "NIL",
    remarks: "very good",
    coordinates: [
      {
        latitude: 1.3584168333017268,
        longitude: 103.70746290442666,
        danger: "High Crowd Levels",
        time: "15 June 3PM",
      },
      {
        latitude: 1.3500577333970956,
        longitude: 103.72828007393781,
        danger: "Road Works",
        time: "15 June 8PM",
      },
      {
        latitude: 1.3316125813561035,
        longitude: 103.72105779063803,
        danger: "Unsuitable For Running",
        time: "15 June 8PM",
      },
      {
        latitude: 1.3320205689299665,
        longitude: 103.7067883579421,
        danger: "Unsuitable For Running",
        time: "15 June 8PM",
      },
      {
        latitude: 1.3223156736659978,
        longitude: 103.72187287348657,
        danger: "Unsuitable For Running",
        time: "15 June 8PM",
      },
    ],
  },
};

const origin = { latitude: 1.3584168333017268, longitude: 103.70746290442666 };
const destination = {
  latitude: 1.3500577333970956,
  longitude: 103.72828007393781,
};
const secondDestination = {
  latitude: 1.3316125813561035,
  longitude: 103.72105779063803,
};

function DangerComponent({ mapWidth, mapHeight, display, coords }) {
  const cancelInModalMode = () => setInModalMode(false);
  const [inModalMode, setInModalMode] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(0);

  const manageModal = (i) => {
    setSelectedMarker(i);
    setInModalMode(true);
  };
  console.log(coords);
  const [markers, setMarkers] = useState(coords);
  let renderedDirections = [];
  const renderedMarker = [];
  if (markers.length > 0) {
    for (let i = 0; i < markers.length; i++) {
      renderedMarker.push(
        <Marker
          key={i}
          coordinate={markers[i]}
          onPress={() => {
            manageModal(i);
          }}
        ></Marker>
      );
    }

    for (let i = 0; i < markers.length; i++) {
      // only push if there is more than  1 marker and less than the max number of markers.
      // if got 3 markers, means there will be 2 destination. From A to B and B to C
      // If only got 1 marker, means there is no destination.
      if (markers.length > 1 && i < markers.length) {
        renderedDirections.push(
          <MapViewDirections
            key={i}
            origin={markers[i]}
            destination={markers[i + 1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor={"#007fff"}
          />
        );
      }
    }
  }
  const newStyle = StyleSheet.flatten([
    // styles.container,
    { width: Dimensions.get("window").width * mapWidth },
    { height: Dimensions.get("window").height * mapHeight },
  ]);

  return (
    <View>
      <MapView
        style={newStyle}
        initialRegion={{
          latitude: markers[4].latitude,
          longitude: markers[4].longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* <Marker coordinate={origin} onPress={() => setInModalMode(true)} /> */}
        {renderedMarker}
      </MapView>

      <MarkerComponent
        text={data.Route.coordinates[selectedMarker].danger}
        visible={inModalMode}
        onCancel={cancelInModalMode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.6,
  },
});

export default DangerComponent;
