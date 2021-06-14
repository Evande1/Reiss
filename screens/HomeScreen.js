import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

function HomeScreen(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.container}>
        <Button title='Click me' />
        <Text>Hello World</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
