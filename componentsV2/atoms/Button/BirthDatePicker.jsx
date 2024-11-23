import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../../styles/colors';

const StyledPicker = styled.TouchableOpacity`
  backgroundColor: ${Colors.secondaryDark};
  padding-horizontal: 20px;
  padding-vertical: 10px;
  height: 46.5px;
  alignItems: 'center';
  borderRadius: 5px;
  color: ${Colors.primaryLight};
`;

const StyledLabel = styled.Text`
  position: absolute;
  font-family: OwnersText;
  left: 20px;
  top: 15px;
`;

const BirthDatePicker = ({ action, birthDate }) => {
  return (
    <StyledPicker onPress={action}>
      <StyledLabel
        style={{
          color: birthDate !== 'Date de naissance' ? Colors.primaryLight : Colors.dimmedLight,
          fontWeight: birthDate !== 'Date de naissance' ? 'bold' : 'normal',
          fontSize: birthDate !== 'Date de naissance' ? 16 : 15,
        }}
      >
        {birthDate}
      </StyledLabel>
    </StyledPicker>
  );
};

export default BirthDatePicker;