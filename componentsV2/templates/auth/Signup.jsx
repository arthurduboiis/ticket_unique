import React from 'react';
import { Container } from '../../atoms';
import { ConnectionHeader } from '../../molecules';
import { AuthOrganism } from '../../organismes';

const Signup = ({
  goToLogin,
  loginWithFb,
  loginWithGoogle,
  loginWithApple,
  email,
  setEmail,
  password,
  setPassword,
  passwordConfirm,
  setPasswordConfirm,
  error,
  onSubmit,
  cguCheked,
  toggleCgu,
  newsletterChecked,
  toggleNewsletter,
  handlePressURL,
}) => {
  return (
    <Container.KeyboardAvoidingLayout>
      <Container.ColContainer
        gap={'20px'}
        alignItems={'center'}
        width={'100%'}
        paddingHorizontal={'30px'}
        paddingVertical={'80px'}
      >
        <ConnectionHeader title={'Crée ton compte'} />
        <AuthOrganism.RegisterForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordConfirm={passwordConfirm}
          setPasswordConfirm={setPasswordConfirm}
          error={error}
          onSubmit={onSubmit}
          cguCheked={cguCheked}
          toggleCgu={toggleCgu}
          newsletterChecked={newsletterChecked}
          toggleNewsletter={toggleNewsletter}
          handlePressURL={handlePressURL}
        />
        <AuthOrganism.Footer
          textGoTo={'Déjà un compte ? Connecte toi !'}
          goToPage={goToLogin}
          loginWithFb={loginWithFb}
          loginWithGoogle={loginWithGoogle}
          loginWithApple={loginWithApple}
        />
      </Container.ColContainer>
    </Container.KeyboardAvoidingLayout>
  );
};

export default Signup;
