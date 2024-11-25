import React from 'react';
import { Container } from '../../atoms';
import { AuthOrganism } from '../../organismes';
import { ConnectionHeader } from '../../molecules';
// import ModalMessage from '../../../components/ModalMessage';

const PasswordForgotten = ({ email, setEmail, modalVisible, setModalVisible, onSubmit }) => {
  return (
    <Container.KeyboardAvoidingLayout forgottenPage>
      <Container.ColContainer
        gap={'20px'}
        alignItems={'center'}
        width={'100%'}
        paddingHorizontal={'30px'}
        paddingVertical={'80px'}
      >
        <ConnectionHeader title={'Mot de passe oublié ?'} />
        {/* <ModalMessage
          message="Consulte ta boîte mail !"
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        /> */}
        <AuthOrganism.PasswordForgottenForm
          email={email}
          setEmail={setEmail}
          onSubmit={onSubmit}
        />
      </Container.ColContainer>
    </Container.KeyboardAvoidingLayout>
  );
};

export default PasswordForgotten;
