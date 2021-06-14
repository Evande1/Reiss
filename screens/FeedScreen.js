import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

function FeedScreen({ navigation }) {
  return (
    <View stylexe={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  );
}

export default FeedScreen;
