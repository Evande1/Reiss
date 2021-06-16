import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapViewDirections from "react-native-maps-directions";
import MapView, { Marker } from "react-native-maps";
import { ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import MarkerComponent from "./MarkerComponent";

const GOOGLE_MAPS_APIKEY = "AIzaSyCve7vFBOjV4kK_DwhSHnn2JF-hXAPeszw";
const dangersDemo = [
  {
    latitude: 1.3584168333017268,
    longitude: 103.70746290442666,
    danger: "Pot Hole",
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
    danger: "Covid Cluster",
    time: "15 June 8PM",
  },
  {
    latitude: 1.3320205689299665,
    longitude: 103.7067883579421,
    danger: "Park Shut Shut",
    time: "15 June 8PM",
  },
  {
    latitude: 1.3223156736659978,
    longitude: 103.72187287348657,
    danger: "Heavy Traffic",
    time: "15 June 8PM",
  },
  {
    latitude: 1.3244081821764921,
    longitude: 103.72955948083074,
    danger: "Stray Dogs",
    time: "15 June 8PM",
  },
  {
    latitude: 1.3208364855403654,
    longitude: 103.71873327350218,
    danger: "Hostile Wild Boars",
    time: "15 June 8PM",
  },
  {
    latitude: 1.3319844913167456,
    longitude: 103.73699347652969,
    danger: "Block Off Path",
    time: "15 June 8PM",
  },
];
function TempMappingComponent({ testProp, parentCallback }) {
  // loading state
  // distance state
  const cancelInModalMode = () => setInModalMode(false);
  const [counter, setCounter] = useState(0);
  const [distance, setDistance] = useState(0);
  const [inModalMode, setInModalMode] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(0);
  const manageModal = (i) => {
    setSelectedMarker(i);
    setInModalMode(true);
  };
  const [dangerMarkers, setDangerMarkers] = useState(dangersDemo);

  const [markers, setMarkers] = useState([]);
  let renderedDirections = [];
  const renderedMarker = [];
  const renderedDangerMarker = [];

  //   const [location, setLocation] = useState(null);
  //   const [errorMsg, setErrorMsg] = useState(null);

  //   const getLocation = async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({ accuracy: 6 });
  //     setLocation(location);
  //     setMarkers([
  //       {
  //         latitude: location.coords.latitude,
  //         longitude: location.coords.longitude,
  //       },
  //     ]);
  //   };
  const location = {
    latitude: 1.3369992736929992,
    longitude: 103.72147591260439,
  };

  useEffect(() => {
    renderedDirections = [];
    setMarkers([location]);
    setDistance(0);
  }, [testProp]);

  useEffect(() => {
    parentCallback(distance);
  }, [distance]);

  if (dangerMarkers.length > 0) {
    for (let i = 0; i < dangerMarkers.length; i++) {
      renderedDangerMarker.push(
        <Marker
          key={i}
          coordinate={dangerMarkers[i]}
          onPress={() => {
            manageModal(i);
          }}
        ></Marker>
      );
    }
  }

  if (markers.length > 0) {
    for (let i = 0; i < markers.length; i++) {
      renderedMarker.push(
        <Marker pinColor={"blue"} key={i} coordinate={markers[i]}></Marker>
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
            onReady={(result) => {
              setDistance(distance + result.distance);
            }}
          />
        );
      }
    }
  }

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 1.3369992736929992,
          longitude: 103.72147591260439,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onPress={(event) => {
          console.log("click");
          setMarkers([...markers, event.nativeEvent.coordinate]);
        }}
      >
        {/* example of MapViewDirections */}
        {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        /> */}
        {renderedDirections}
        {renderedMarker}
        {renderedDangerMarker}
        {/* Example of marker coordinate */}
        {/* <Marker
          coordinate={{
            latitude: 1.3493511621188985,
            longitude: 103.72356312969188,
          }}
        >
          <CustomMarker />
        </Marker> */}
      </MapView>
      {/* need to add further styling */}
      {/* <Text>Distance: {distance}</Text> */}
      <MarkerComponent
        text={dangersDemo[selectedMarker].danger}
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
    // 80% of the screen takes on the height. so there is 20% space left at the bottom for you to fit things in.
    height: Dimensions.get("window").height * 0.75,
  },
});

export default TempMappingComponent;
