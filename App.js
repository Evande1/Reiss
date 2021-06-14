import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import FeedScreen from './screens/FeedScreen';
import HistoryScreen from './screens/HistoryScreen';
import ResultScreen from './screens/ResultScreen';
import MappingScreen from './screens/MappingScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Feed' component={FeedScreen} />
        <Drawer.Screen name='History' component={HistoryScreen} />
        <Drawer.Screen name='Result' component={ResultScreen} />
        <Drawer.Screen name='Mapping' component={MappingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
