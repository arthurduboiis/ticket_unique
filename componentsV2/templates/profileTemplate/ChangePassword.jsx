import React from 'react';
import { Container, Typo, Button } from "../../atoms";
import { LabeledInput } from "../../molecules";

const ChangePassword = ({
  oldPassword,
  newPassword,
  confirmPassword,
  setOldPassword,
  setNewPassword,
  setConfirmPassword,
  onChangePassword,
  loading,
  error,
}) => {
  return (
    <Container.PageContainer gap={"20px"} alignItems={'center'} width={'100%'} canBack>
      <Typo.Gotham text={"Modifier mot de passe"} uppercase />
      
      <Container.ColContainer 
        paddingVertical={"20px"} 
        gap={'25px'}
        alignItems={'center'}
        width={'100%'}
      >
        <LabeledInput
          label={'Ancien mot de passe'}
          value={oldPassword}
          onChangeText={setOldPassword}
          icon="eye"
          secureTextEntry
        />
        <LabeledInput
          label={'Nouveau mot de passe'}
          value={newPassword}
          onChangeText={setNewPassword}
          icon="eye"
          secureTextEntry
        />
        <LabeledInput
          label={'Confirmer mot de passe'}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          icon="eye"
          secureTextEntry
        />
        
        {/* Affichage de l'erreur */}
        {error && <Typo color="red" text={error} />}
        
        {/* Bouton de soumission */}
        <Button.Base title="valider" onPress={onChangePassword} />
      </Container.ColContainer>
    </Container.PageContainer>
  );
};

export default ChangePassword;
