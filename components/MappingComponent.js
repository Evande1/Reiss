import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { Marker } from 'react-native-maps';
import { ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBc4I3OelmxwirxU-Q_yjhPqmjwPE86JE8';

function MappingComponent() {
  // loading state
  const [loading, setLoading] = useState(null);
  // distance state
  const [distance, setDistance] = useState(0);

  const [markers, setMarkers] = useState([]);
  const [directions, setDirections] = useState();
  const renderedDirections = [];
  const renderedMarker = [];

  // this whole portion below is to get the current location of the person.  I console.log the data so you can see it in the terminal.
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocation = async () => {
    setLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      setLoading(false);
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    setMarkers([
      {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    ]);
    setLoading(false);
  };

  useEffect(() => {
    getLocation();
  }, []);
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  // get current location
  // console.log(text);

  if (markers.length > 0) {
    for (let i = 0; i < markers.length; i++) {
      renderedMarker.push(<Marker key={i} coordinate={markers[i]}></Marker>);
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
            strokeColor={'#007fff'}
            onReady={(result) => setDistance(distance + result.distance)}
          />
        );
      }
    }
  }
  if (text === 'Waiting..') {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        onPress={(event) =>
          setMarkers([...markers, event.nativeEvent.coordinate])
        }
      >
        {/* example of MapViewDirections */}
        {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        /> */}
        {renderedDirections}
        {renderedMarker}
        {/* Example of marker coordinate */}
        {/* <Marker coordinate={origin} /> */}
      </MapView>
      {/* need to add further styling */}
      <Text>Distance: {distance}</Text>
    </View>
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
    // 80% of the screen takes on the height. so there is 20% space left at the bottom for you to fit things in.
    height: Dimensions.get('window').height * 0.8,
  },
});

export default MappingComponent;