import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

export const modalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalView: {
    backgroundColor: Colors.dark.primaryLight,
    paddingVertical: 44,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'flex-start',
    gap: 15,
  },
  deleteContainer: {
    width: '100%',
    flexDirection: 'column',
    gap: 20,
  },
  buttonDeleteContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },
  cancelDeleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  modalText: {
    marginBottom: 15,
    color: Colors.dark.primaryDark,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Owners',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    width: '100%',
  },
});
