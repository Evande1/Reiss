import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const arr = [
  {
    startTime: 'Tue Jun 15 2021 10:47:27 GMT+0800',
    endTime: 'Tue Jun 15 2021 10:47:27 GMT+0800',
    totalDistance: '2.42',
    pace: '5:30',
    title: 'Monday Morning Run',
    crowdLevel: 'High',
    dangers: 'NIL',
    remarks: 'very good',
    directions:
      "[{'origin' : {'longitude' : '1.362063609552904' , 'latitude' : '103.69956604782682'}, 'destination' : {'longitude' : '1.3367505787994702' , 'latitude' : '103.72342697847203'}  }]",
  },
  {
    startTime: 'Tue Jun 15 2021 10:47:27 GMT+0800',
    endTime: 'Tue Jun 15 2021 10:47:27 GMT+0800',
    totalDistance: '2.42',
    pace: '5:30',
    title: 'Monday Morning Run',
    crowdLevel: 'High',
    dangers: 'NIL',
    remarks: 'very good',
    directions:
      "[{'origin' : {'longitude' : '1.362063609552904' , 'latitude' : '103.69956604782682'}, 'destination' : {'longitude' : '1.3367505787994702' , 'latitude' : '103.72342697847203'}  }]",
  },
  {
    startTime: 'Tue Jun 15 2021 10:47:27 GMT+0800',
    endTime: 'Tue Jun 15 2021 10:47:27 GMT+0800',
    totalDistance: '2.42',
    pace: '5:30',
    title: 'Monday Morning Run',
    crowdLevel: 'High',
    dangers: 'NIL',
    remarks: 'very good',
    directions:
      "[{'origin' : {'longitude' : '1.362063609552904' , 'latitude' : '103.69956604782682'}, 'destination' : {'longitude' : '1.3367505787994702' , 'latitude' : '103.72342697847203'}  }]",
  },
];

function PastRoutesScreen({ navigation }) {
  const renderedArr = [];
  // for( let i = 0 ; i < arr.length ;i++ ) {
  //   renderedArr.push(

  //   )
  // }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <FlatList
          data={arr}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.item}>{item.startTime}</Text>
              <Text style={styles.item}>{item.totalDistance}</Text>
            </View>
          )}
        />
      </View>
      <Text>Hi</Text>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
const PastRoutesStack = createStackNavigator();

const PastRoutesStackScreen = ({ navigation }) => (
  <PastRoutesStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <PastRoutesStack.Screen
      name='PastRoutes'
      component={PastRoutesScreen}
      options={{
        title: 'PastRoutes',
        headerLeft: () => (
          <Icon.Button
            name='ios-menu'
            size={25}
            backgroundColor='#009387'
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </PastRoutesStack.Navigator>
);

export default PastRoutesStackScreen;
