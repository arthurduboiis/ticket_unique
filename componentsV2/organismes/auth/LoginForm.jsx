import React from 'react';
import { Button, Container, Typo } from '../../atoms';
import { LabeledInput, SecondaryButton } from '../../molecules';
import { Colors } from '../../../constants/Colors';

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  goToPasswordForgotten,
  error = null,
}) => {
  return (
    <Container.ColContainer gap={'20px'} alignItems={'center'} width={'100%'} >
      <Container.ColContainer gap={'10px'} alignItems={'center'} justifyContent={'center'} width={'100%'}>
        <Container.ColContainer
          gap={'25px'}
          alignItems={'center'}
          width={'100%'}
          paddingVertical={'10px'}
        >
          {error ? (
            <Typo.OwnersText color={Colors.light.dimmedLight} text={error}/>
              
          ) : null}
          <LabeledInput
            label={'Email'}
            value={email}
            onChangeText={setEmail}
            inputMode="email"
          />
          <LabeledInput
            label={'Mot de passe'}
            value={password}
            onChangeText={setPassword}
            icon="eye"
          />
        </Container.ColContainer>
        <SecondaryButton title="Mot de passe oublié" action={goToPasswordForgotten} paddingVertical={'0px'} paddingHorizontal={'0px'}/>
      </Container.ColContainer>
      <Button.Base title="se connecter" onPress={onSubmit} />
    </Container.ColContainer>
  );
};

export default LoginForm;
