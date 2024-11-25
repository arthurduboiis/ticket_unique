import React from 'react';
import { Container, Typo } from '../../atoms';
import { Modal, View, TouchableWithoutFeedback } from 'react-native';
import Button from '../../../components/Button';
import ChevronButton from '../../../components/ChevronButton';
import BirthdatePicker from '../../../components/BirthdatePicker';
import { Colors } from '../../../constants/Colors';
import { modalStyle } from '../../../styles/modal';
import { EditProfileForm } from '../../organismes';
import { ScrollContainer } from '../../atoms/Container';
import ModalMessage from '../../../components/ModalMessage';

const EditProfile = ({
  isDatePickerVisible,
  hideDatePicker,
  applySelectedDate,
  selectedDate,
  setSelectedDate,
  gender,
  region,
  onSubmit,
  metadata,
  handleInputChange,
  showDatePicker,
  birthDate,
  modal,
  setModal,
  message,
}) => {
  return (
    <Container.PageContainer canBack gap={'20px'}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isDatePickerVisible}
        onRequestClose={hideDatePicker}
      >
        <TouchableWithoutFeedback onPress={hideDatePicker}>
          <View style={modalStyle.centeredView}>
            <TouchableWithoutFeedback>
              <View style={modalStyle.modalView}>
                <BirthdatePicker
                  initialDate={selectedDate}
                  onDateChange={(date) => setSelectedDate(date)}
                />
                <View style={[modalStyle.buttonContainer]}>
                  <Button
                    text="appliquer"
                    onPress={applySelectedDate}
                    backgroundColor={Colors.light.primaryDark}
                  />
                  <ChevronButton
                    text="annuler"
                    onPress={hideDatePicker}
                    chevronLeft={true}
                    textStyle={{ color: Colors.light.primaryDark }}
                    chevronColor={Colors.light.primaryDark}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <ModalMessage
            modalVisible={modal}
            message={message}
            setModalVisible={setModal}
          />
      <ScrollContainer>
        <Container.ColContainer gap={'20px'}>
          <Typo.Gotham text={'Modifier mes infos'} uppercase />
          <EditProfileForm
            gender={gender}
            region={region}
            onSubmit={onSubmit}
            metadata={metadata}
            handleInputChange={handleInputChange}
            showDatePicker={showDatePicker}
            birthDate={birthDate}
          />
        </Container.ColContainer>
      </ScrollContainer>
    </Container.PageContainer>
  );
};

export default EditProfile;
