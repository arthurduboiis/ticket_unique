import React from 'react';
import { Button, Container, Select } from '../atoms';
import { LabeledInput } from '../molecules';

const EditProfileForm = ({
  metadata,
  handleInputChange,
  onSubmit,
  gender,
  region,
  showDatePicker,
  birthDate,
}) => {
  return (
    <Container.ColContainer gap="20px" paddingVertical={'10px'}>
      <LabeledInput
        label={'Prénom'}
        value={metadata.firstname}
        onChangeText={(text) => handleInputChange('firstname', text)}
      />
      <LabeledInput
        label={'Nom'}
        value={metadata.lastname}
        onChangeText={(text) => handleInputChange('lastname', text)}
      />
      <LabeledInput
        label={'Adresse mail'}
        value={metadata.email}
        onChangeText={(text) => handleInputChange('email', text)}
        disabled
        inputMode={'email'}
      />
      <LabeledInput
        label={'Téléphone'}
        value={metadata.phone}
        onChangeText={(text) => handleInputChange('phone', text)}
        inputMode={'tel'}
      />
      <Select.Base
        selectedValue={metadata?.gender}
        onValueChange={(itemValue) => handleInputChange('gender', itemValue)}
        placeholder={'Genre'}
        items={gender}
      />

      <Select.Base
        selectedValue={metadata?.region}
        onValueChange={(itemValue) => handleInputChange('region', itemValue)}
        placeholder={'Région'}
        items={region}
      />

      <Button.BirthDatePicker
        birthDate={birthDate}
        action={showDatePicker}
      />

      <Button.Base
        title="enregistrer"
        onPress={onSubmit}
        alignSelf={'center'}
      />
    </Container.ColContainer>
  );
};

export default EditProfileForm;
