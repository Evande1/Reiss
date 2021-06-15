import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native';

import SelectRouteButton from './SelectRouteButton';
import StartButton from './StartButton';

const MarkerComponent = (props) => {
  return (
    <Modal
      visible={props.visible}
      animationType='slide'
      transparent={true}
      onRequestClose={props.onCancel}
    >
      <TouchableOpacity style={styles.modalContainer} onPress={props.onCancel}>
        <TouchableOpacity style={styles.modal} activeOpacity={1}>
          <View>
            <Text>Dangers: {props.text}</Text>
            <Text>Submitted on: 15 June 3 PM</Text>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '100%',
    height: '30%',
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2689b',
    borderRadius: 20,
  },
});

export default MarkerComponent;
