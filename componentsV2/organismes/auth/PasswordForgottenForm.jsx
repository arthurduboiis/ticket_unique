import React from 'react';
import { Container, Typo, Button } from '../../atoms';
import { LabeledInput } from '../../molecules';

const PasswordForgottenForm = ({
  email,
  setEmail,
  onSubmit,
}) => {
  return (
    <Container.ColContainer gap={'20px'} alignItems={'center'} width={'100%'}>
      <Typo.OwnersText
        textAlign={'center'}
        text={'Un mail te sera envoyé pour réinitialiser ton mot de passe'}
        paddingTop={'10px'}
      />
      <Container.ColContainer
        alignItems={'center'}
        width={'100%'}
        paddingVertical={'10px'}
      >
        <LabeledInput
          label={'Email'}
          value={email}
          onChangeText={setEmail}
          inputMode="email"
        />
      </Container.ColContainer>
      <Button.Base title="envoyer" onPress={onSubmit} />
    </Container.ColContainer>
  );
};

export default PasswordForgottenForm;
