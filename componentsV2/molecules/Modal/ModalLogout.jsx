import React from 'react'
import { Button, Container, Typo } from '../../atoms'
import { Colors } from '../../../constants/Colors'

const ModalLogout = ({action, modalVisible, closeModal}) => {
  return (
    <Container.ModalContainer modalVisible={modalVisible} closeModal={closeModal}>
      <Typo.OwnersText  color={Colors.light.primaryDark} >Se déconnecter ?</Typo.OwnersText>
      <Button.Base title='Oui' action={action} modalMode={true} />
    </Container.ModalContainer>
  )
}

export default ModalLogout