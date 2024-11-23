import React, { useState } from 'react';
import { AuthTemplate } from '../../templates';
import { useNavigation } from '@react-navigation/core';
import { IOS_CLIENT_ID, ANDROID_CLIENT_ID } from '@env';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  handleLogin,
  handleLoginGoogle,
  handleLoginFacebook,
  handleAppleSignIn,
} from '../../../services/AuthService';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  GoogleSignin.configure({
    webClientId: process.env.ANDROID_CLIENT_ID || ANDROID_CLIENT_ID,
    iosClientId: process.env.IOS_CLIENT_ID || IOS_CLIENT_ID,
  });

  const handleLoginClassic = async () => {
    try {
      await handleLogin(email, password);
      setError('');
    } catch (err) {
      console.log("error should be logged in page here :", err)
      if (
        err.code === 'auth/invalid-login-credentials' ||
        err.code === 'auth/invalid-email'
      ) {
        setError('Mail ou mot de passe incorrect.');
      } else if (err.code === 'auth/user-not-found') {
        setError('Aucun compte trouvé avec cet email.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Mot de passe incorrect.');
      } else if (err.code === 'auth/too-many-requests') {
        setError(
          'Trop de tentatives de connexion. Réessaie plus tard ou réinitialise ton mot de passe.'
        );
      } else {
        // console.error(err.message)
        setError('Une erreur est survenue. Réessaie.');
      }
    }
  };

  const loginGoogle = async () => {
    try {
      await handleLoginGoogle();
    } catch (error) {
      console.error('Error during Google login:', error);
      setError('Une erreur est survenue. Réessaie.');
    }
  };

  const loginFacebook = async () => {
    try {
      await handleLoginFacebook();
    } catch (error) {
      console.error('Error during Facebook login:', error);
      setError(error);
    }
  };

  const loginApple = async () => {
    try {
      await handleAppleSignIn();
    } catch (error) {
      console.error('Error during Apple login:', error);
      setError('Une erreur est survenue. Réessaie.');
    }
  };

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  const goToPasswordForgotten = () => {
    navigation.navigate('ForgotPassword');
  };

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
      loginWithGoogle={loginGoogle}
      loginWithFb={loginFacebook}
      loginWithApple={loginApple}
    />
  );
};

export default LoginPage;
