import React from 'react';
import { Button, Container, Typo } from '../../atoms';
import { Modal, View, TouchableWithoutFeedback } from 'react-native';
// import BirthdatePicker from '../../../components/BirthdatePicker';
import { useThemeColor } from '../../../hooks/useThemeColor';
// import { modalStyle } from '../../../styles/modal';
import { EditProfileForm } from '../../organismes';
import { ScrollContainer } from '../../atoms/Container';
// import ModalMessage from '../../../components/ModalMessage';
import { SecondaryButton } from '../../molecules';

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
      {/* <Modal
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
                  <Button.Base
                    text="appliquer"
                    onPress={applySelectedDate}
                    backgroundColor={useThemeColor("primaryDark")}
                  />
                  <SecondaryButton
                    text="annuler"
                    onPress={hideDatePicker}
                    chevronLeft={true}
                    textStyle={{ color: useThemeColor("primaryDark") }}
                    chevronColor={useThemeColor("primaryDark")}
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
          /> */}
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
