import React, { useEffect } from 'react';
import { Container } from '../../atoms';
import { AuthOrganism } from '../../organismes';
import { ConnectionHeader } from '../../molecules';

const Login = ({
  goToRegister,
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  goToPasswordForgotten,
  error,
}) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <Container.KeyboardAvoidingLayout>
      <Container.ColContainer
        gap={'20px'}
        alignItems={'center'}
        width={'100%'}
        paddingHorizontal={'30px'}
        paddingVertical={'80px'}
      >
        <ConnectionHeader title='Connexion' />
        <AuthOrganism.LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={onSubmit}
          goToPasswordForgotten={goToPasswordForgotten}
          error={error}
        />

        <AuthOrganism.Footer
          textGoTo={'Pas encore de compte ? Inscris toi !'}
          goToPage={goToRegister}
        />
      </Container.ColContainer>
    </Container.KeyboardAvoidingLayout>
  );
};

export default Login;
