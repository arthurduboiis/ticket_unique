import React, { useState, useCallback } from 'react';
import { AuthTemplate } from '../../templates';
import { useNavigation } from '@react-navigation/core';
import { Alert, Linking } from 'react-native';
import { register } from '../../../services/connectionService';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const [checkCGU, setCheckCGU] = useState(false);
  const [newsletter, setNewsletter] = useState(false);


  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const supportedURL = 'https://unique-ticket.com/cgu/';

  const handlePressURL = useCallback(async () => {
    const supported = await Linking.canOpenURL(supportedURL);

    if (supported) {
      await Linking.openURL(supportedURL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${supportedURL}`);
    }
  }, [supportedURL]);

  const toggleCheckCGU = () => {
    setCheckCGU(!checkCGU);
  }

  const toggleCheckNewsletter = () => {
    setNewsletter(!newsletter);
  }

  const handleRegisterClassic = async () => {
    try {
      await register(email, password, passwordConfirm);
    } catch (error){
      setError(error.message);
    }
 
  }

  return (
    <AuthTemplate.Signup
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      passwordConfirm={passwordConfirm}
      setPasswordConfirm={setPasswordConfirm}
      error={error}
      onSubmit={handleRegisterClassic}
      cguCheked={checkCGU}
      toggleCgu={toggleCheckCGU}
      newsletterChecked={newsletter}
      toggleNewsletter={toggleCheckNewsletter}
      handlePressURL={handlePressURL}
      goToLogin={goToLogin}
    />
  );
};

export default SignupPage;
