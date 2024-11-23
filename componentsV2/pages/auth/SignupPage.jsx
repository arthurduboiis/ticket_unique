import React, { useState, useCallback } from 'react';
import { AuthTemplate } from '../../templates';
import { useNavigation } from '@react-navigation/core';
import { IOS_CLIENT_ID, ANDROID_CLIENT_ID } from '@env';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  handleRegister,
  handleLoginGoogle,
  handleLoginFacebook,
  handleAppleSignIn,
} from '../../../services/AuthService';
import { Alert, Linking } from 'react-native';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const [checkCGU, setCheckCGU] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  GoogleSignin.configure({
    webClientId: process.env.ANDROID_CLIENT_ID || ANDROID_CLIENT_ID,
    iosClientId: process.env.IOS_CLIENT_ID || IOS_CLIENT_ID,
  });

  const validatePassword = (password) => {
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*._-]).{8,}$/;
    return regex.test(password);
  };

  const handleRegisterClassic = async () => {
    if (!validatePassword(password)) {
      setError(
        'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.'
      );
      return;
    }
    if (password !== passwordConfirm) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }
    if (!toggleCheckCGU) {
      setError(
        "Tu dois accepter les conditions générales d'utilisation et de vente."
      );
      return;
    }
    try {
      await handleRegister(email, password, toggleCheckNewsletter);
      setError('');
    } catch (err) {
      if (err.code === 'auth/invalid-email') {
        setError('Email invalide.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('Email déjà utilisé.');
      } else if (err.code === 'auth/weak-password') {
        setError('Mot de passe trop faible.');
      } else {
        setError('Une erreur est survenue. Réessaie.');
      }
    }
  };

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
      loginWithFb={handleLoginFacebook}
      loginWithGoogle={handleLoginGoogle}
      loginWithApple={handleAppleSignIn}
    />
  );
};

export default SignupPage;
