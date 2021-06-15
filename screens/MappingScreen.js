import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MappingComponent from '../components/MappingComponent';
import Icon from 'react-native-vector-icons/Ionicons';
function MappingScreen({ navigation }) {
  return (
    <View stylexe={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MappingComponent></MappingComponent>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  );
}

const MappingStack = createStackNavigator();

const MappingStackScreen = ({ navigation }) => (
  <MappingStack.Navigator
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
    <MappingStack.Screen
      name='?'
      component={MappingScreen}
      options={{
        title: 'Mapping',
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
  </MappingStack.Navigator>
);

export default MappingStackScreen;
