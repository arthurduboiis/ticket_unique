import React from 'react';
import { Button, Container } from '../../atoms';
import { SecondaryButton } from '../../molecules';
import FacebookLoginIcon from '../../../../assets/facebook_login.svg';
import AppleButtonImage from '../../../../assets/apple_login.svg';
import GoogleLoginIcon from '../../../../assets/google_login.svg';
import { Colors } from '../../../styles/colors';
import { appleAuth } from '@invertase/react-native-apple-authentication';


const Footer = ({
  textGoTo,
  goToPage,
  loginWithFb,
  loginWithGoogle,
  loginWithApple,
}) => {
  return (
    <Container.ColContainer
      gap={'20px'}
      alignItems={'center'}
      width={'100%'}
    >
      <SecondaryButton
        title={textGoTo}
        action={goToPage}
        paddingVertical={'0px'}
        paddingHorizontal={'0px'}
      />
      <Container.RowContainer
        gap={'20px'}
        alignItems={'center'}
        justifyContent={'center'}
        width={'100%'}
      >
        {loginWithFb && (
          <Button.Provider loginWithProvider={loginWithFb} bgColor={'#0866FF'}>
            <FacebookLoginIcon />
          </Button.Provider>
        )}

        {loginWithGoogle && (
          <Button.Provider loginWithProvider={loginWithGoogle} bgColor={Colors.primaryLight}>
            <GoogleLoginIcon />
          </Button.Provider>
        )}

        {(loginWithApple && appleAuth.isSupported) && (
          <Button.Provider loginWithProvider={loginWithApple} bgColor={'transparent'}>
            <AppleButtonImage />
          </Button.Provider>
        )}

      </Container.RowContainer>
    </Container.ColContainer>
  );
};

export default Footer;
