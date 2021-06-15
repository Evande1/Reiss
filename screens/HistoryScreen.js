import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const arr = [
  {
    startTime: 'Mon Jun 15 2021 10:47:27 ',
    endTime: 'Mon Jun 15 2021 10:47:27 ',
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
    startTime: 'Tue Jun 16 2021 10:47:27  ',
    endTime: 'Tue Jun 16 2021 10:47:27  ',
    totalDistance: '2.42',
    pace: '5:30',
    title: 'Tuesday Morning Run',
    crowdLevel: 'High',
    dangers: 'NIL',
    remarks: 'very good',
    directions:
      "[{'origin' : {'longitude' : '1.362063609552904' , 'latitude' : '103.69956604782682'}, 'destination' : {'longitude' : '1.3367505787994702' , 'latitude' : '103.72342697847203'}  }]",
  },
  {
    startTime: 'Wed Jun 17 2021 10:47:27  ',
    endTime: 'Wed Jun 17 2021 10:47:27  ',
    totalDistance: '2.42',
    pace: '5:30',
    title: 'Wednesday Morning Run',
    crowdLevel: 'High',
    dangers: 'NIL',
    remarks: 'very good',
    directions:
      "[{'origin' : {'longitude' : '1.362063609552904' , 'latitude' : '103.69956604782682'}, 'destination' : {'longitude' : '1.3367505787994702' , 'latitude' : '103.72342697847203'}  }]",
  },
];

function HistoryScreen({ navigation }) {
  const renderedArr = [];
  // for( let i = 0 ; i < arr.length ;i++ ) {
  //   renderedArr.push(

  //   )
  // }
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={styles.container}>
        <FlatList
          data={arr}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.startTime}</Text>
              <Text>{item.crowdLevel}</Text>
              <Text>{item.dangers}</Text>
              <Text>{item.pace}</Text>
              <Text>{item.totalDistance}</Text>
            </View>
          )}
        />
      </View>
      <Text>Hi</Text>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  );
}
const HistoryStack = createStackNavigator();

const HistoryStackScreen = ({ navigation }) => (
  <HistoryStack.Navigator
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
    <HistoryStack.Screen
      name='History'
      component={HistoryScreen}
      options={{
        title: 'History',
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
  </HistoryStack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  tag: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    width: '100%',
    height: '90%',
    padding: 3,
    marginTop: 10,
  },
});
export default HistoryStackScreen;
