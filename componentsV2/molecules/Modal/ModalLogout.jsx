import React from 'react'
import { Button, Container, Typo } from '../../atoms'
import { Colors } from '../../../constants/Colors'

const ModalLogout = ({action, modalVisible, closeModal}) => {
  return (
    <Container.ModalContainer modalVisible={modalVisible} closeModal={closeModal}>
      <Typo.OwnersText  text='Se déconnecter ?' color={Colors.light.primaryDark} />
      <Button.Base title='Oui' action={action} darkmode={true} />
    </Container.ModalContainer>
  )
}

export default ModalLogout