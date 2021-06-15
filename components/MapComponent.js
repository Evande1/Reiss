import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCve7vFBOjV4kK_DwhSHnn2JF-hXAPeszw';

const origin = { latitude: 1.3584168333017268, longitude: 103.70746290442666 };
const destination = {
  latitude: 1.3500577333970956,
  longitude: 103.72828007393781,
};
const secondDestination = {
  latitude: 1.3316125813561035,
  longitude: 103.72105779063803,
};

function MapComponent() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  // get current location
  //   console.log(text);
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 1.3584168333017268,
        longitude: 103.70746290442666,
        latitudeDelta: 0.08,
        longitudeDelta: 0.08,
      }}
    >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={4}
        strokeColor={'#007fff'}
      />
      <MapViewDirections
        origin={destination}
        destination={secondDestination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={4}
        strokeColor={'#007fff'}
      />
      <Marker coordinate={origin} />
      <Marker coordinate={destination} />
      <Marker coordinate={secondDestination} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.6,
  },
});

export default MapComponent;
