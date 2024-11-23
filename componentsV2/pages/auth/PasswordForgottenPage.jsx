import React, { useState } from 'react';
import { AuthTemplate } from '../../templates';
import { handleForgotPassword } from '../../../services/AuthService';

const PasswordForgottenPage = () => {
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const sendEmail = async () => {
    try {
      await handleForgotPassword(email);
      setModalVisible(true);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthTemplate.PasswordForgotten
      email={email}
      setEmail={setEmail}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      onSubmit={sendEmail}
    />
  );
};

export default PasswordForgottenPage;
