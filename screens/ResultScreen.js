import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

function ResultScreen({ navigation }) {
  const renderHeader = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
      <Text>Distance</Text>
      <Text>Time</Text>
      <Text>Crowd Level:</Text>
      <TouchableOpacity>
        <Text>High</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Mid</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Low</Text>
      </TouchableOpacity>
    </View>
    
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          title="Start"
          onPress={() => sheetRef.current.snapTo(0)}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[300, 300, 0]}
        borderRadius={10}
        renderHeader={renderHeader}
        enableContentTapInteraction={false}
        
      />
    </>
  );
}
const ResultStack = createStackNavigator();

const ResultStackScreen = ({ navigation }) => (
  <ResultStack.Navigator
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
    <ResultStack.Screen
      name='Result'
      component={ResultScreen}
      options={{
        title: 'Result',
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
  </ResultStack.Navigator>
);

export default ResultStackScreen;

