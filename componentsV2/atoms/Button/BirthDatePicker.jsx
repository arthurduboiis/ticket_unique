import React from 'react';
import styled from 'styled-components/native';
import { useThemeColor } from '../../../hooks/useThemeColor'

const StyledPicker = styled.Pressable`
  backgroundColor: ${props => props.bgColor};
  padding-horizontal: 20px;
  padding-vertical: 10px;
  height: 46.5px;
  alignItems: 'center';
  borderRadius: 5px;
  color: ${props => props.color};
`;

const StyledLabel = styled.Text`
  position: absolute;
  font-family: OwnersText;
  left: 20px;
  top: 15px;
`;

const BirthDatePicker = ({ action, birthDate }) => {
  return (
    <StyledPicker onPress={action} bgColor={useThemeColor("secondaryDark")} color={useThemeColor("primaryLight")}>
      <StyledLabel
        style={{
          color: birthDate !== 'Date de naissance' ? useThemeColor("primaryLight") : useThemeColor("dimmedLight"),
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
