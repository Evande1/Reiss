import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MappingComponent from '../components/MappingComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
function MappingScreen({ navigation, test1 }) {
  [test1, setTest1] = useState(true);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AntDesign
          name='delete'
          size={25}
          color='white'
          onPress={() => setTest1(test1 === true ? false : true)}
        />
      ),
    });
  }, [navigation, test1]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MappingComponent testProp={test1}></MappingComponent>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  );
}

const MappingStack = createStackNavigator();

function MappingStackScreen({ navigation }) {
  return (
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
}

export default MappingStackScreen;
