import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MappingComponent from '../components/MappingComponent';

function MappingScreen({ navigation }) {
  return (
    <View stylexe={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MappingComponent></MappingComponent>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  );
}

export default MappingScreen;
