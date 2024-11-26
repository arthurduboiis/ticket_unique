import React, { useState } from 'react';
import { AuthTemplate } from '../../templates';
import { useNavigation } from '@react-navigation/core';
import { login } from '../../../services/connectionService';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  const goToPasswordForgotten = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleLoginClassic = async () => {
    try {
      await login(email, password);
    }catch (error) {
      setError(error.message);
    }

    console.log('Login with email and password');
  }

  return (
    <AuthTemplate.Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      error={error}
      onSubmit={handleLoginClassic}
      goToRegister={goToRegister}
      goToPasswordForgotten={goToPasswordForgotten}
    />
  );
};

export default LoginPage;
