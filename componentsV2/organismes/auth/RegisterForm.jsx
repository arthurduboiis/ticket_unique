import React from 'react';
import { Container, Typo, Button } from '../../atoms';
import { LabeledInput } from '../../molecules';
import PasswordStrengthMeter from '../../../components/PasswordStrengthMeter';
import { Colors } from '../../../constants/Colors';

const RegisterForm = ({
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
    <Container.ColContainer gap={'20px'} alignItems={'center'} width={'100%'}>
      <Container.ColContainer
        gap={'25px'}
        alignItems={'center'}
        width={'100%'}
        paddingVertical={'10px'}
      >
        {error ? (
          <Typo.OwnersText color={Colors.light.dimmedLight} text={error} />
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
          renderMeter={true}
          PasswordStrengthMeter={<PasswordStrengthMeter password={password} />}
        />
        <LabeledInput
          label={'Confirmation du mot de passe'}
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          icon="eye"
        />
      </Container.ColContainer>
      <Container.ColContainer
        gap={'10px'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
        width={'100%'}
      >
        <Button.CheckboxContainer
          title={
            <Typo.OwnersText
              fontSize={'14px'}
              text={
                <>
                  J’ai lu et j’accepte les{' '}
                  <Typo.OwnersText
                    fontSize={'14px'}
                    underline={true}
                    text={'conditions générales d’utilisation et de vente '}
                    onPress={handlePressURL}
                  />
                  <Typo.OwnersText
                    color={Colors.light.yellow}
                    fontSize={'14px'}
                    text={'*'}
                  />
                </>
              }
            />
          }
          
          checked={cguCheked}
          action={toggleCgu}
        />
        <Button.CheckboxContainer
          title={"J'accepte de recevoir la newsletter de Unique Ticket"}
          checked={newsletterChecked}
          action={toggleNewsletter}
        />
      </Container.ColContainer>
      <Button.Base title="s'inscrire" onPress={onSubmit} />
    </Container.ColContainer>
  );
};

export default RegisterForm;
