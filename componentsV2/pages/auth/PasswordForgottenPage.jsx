import React, { useState } from 'react';
import { AuthTemplate } from '../../templates';

const PasswordForgottenPage = () => {
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

 const sendEmail = () => {
    console.log('Send email');
  }
  
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
