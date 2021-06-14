import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title='Go to notifications'
      />
      <Button onPress={() => navigation.openDrawer()} title='open ' />
    </View>
  );
}

export default HomeScreen;
