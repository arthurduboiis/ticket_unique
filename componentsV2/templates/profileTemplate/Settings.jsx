import React from 'react'
import { Container, Typo } from '../../atoms'
import { ProfileList } from '../../molecules'
import { Modal, TouchableWithoutFeedback, View, Text } from 'react-native'
import DeleteAccountModalContent from '../../../components/DeleteAccountModalContent'
import { modalStyle as baseModalStyle } from '../../../styles/modal';


const Settings = ({
  menu,
  logoutModalVisible,
  deleteModalVisible,
  handleOutsideClick,
  closeModalDelete
}) => {
  return (
    <Container.PageContainer gap={'20px'} canBack>
      <Modal
          animationType="slide"
          transparent={true}
          visible={logoutModalVisible}
        >
          <TouchableWithoutFeedback
            onPress={handleOutsideClick}
          ></TouchableWithoutFeedback>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={deleteModalVisible}
          onRequestClose={closeModalDelete}
        >
          <TouchableWithoutFeedback onPress={closeModalDelete}>
            <View style={baseModalStyle.centeredView}>
              <TouchableWithoutFeedback>
                <View style={baseModalStyle.modalView}>
                  <Text style={baseModalStyle.modalText}>
                    Suppression du compte
                  </Text>
                  <View style={baseModalStyle.buttonContainer}>
                    <DeleteAccountModalContent
                      closeModalDelete={closeModalDelete}
                    />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      <Typo.Gotham text={'Paramètre'} uppercase />
      <Container.ColContainer paddingVertical={'20px'}>
        {menu.map((item, index) => (
          <ProfileList 
            title={item.title}
            action={item.click}
            key={index}
            arrow={item.title === 'Supprimer le compte' ? false : true}
            red={item.title === 'Supprimer le compte' ? true : false}
          />
        ))}
      </Container.ColContainer>

    </Container.PageContainer>
  )
}

export default Settings