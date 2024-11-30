import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { Colors } from '../../constants/Colors';

export default ModalMessage = ({
  message,
  modalVisible,
  setModalVisible,
  text = 'fermer',
}) => {
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>{message}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: Colors.primaryLight,
    paddingVertical: 44,
    paddingHorizontal: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: 'center',
    minHeight: '15%',
    gap: 15,
  },
  modalText: {
    fontSize: 18,
    color: Colors.primaryDark,
  },
});
