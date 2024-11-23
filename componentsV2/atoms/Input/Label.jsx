import React, { useRef } from 'react';
import { Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Colors } from '../../../styles/colors';
import styled from 'styled-components/native';


const StyledLabel = styled.Text`
  color: ${(props) => props.color ?? Colors.dimmedLight};
  font-size: ${(props) => props.fontSize ?? '16px'};
  position: absolute;
  font-family: OwnersText
`;


const Label = ({ label, hasValue, isFocused, labelRef, mandatory }) => {
  return (
    <Animatable.View ref={labelRef} style={{position: 'absolute', left: 20, top: 10}} pointerEvents='none'>
      <StyledLabel 
        color={(isFocused || hasValue) ? Colors.primaryLight : Colors.dimmedLight} 
        fontSize={(isFocused || hasValue)  ? '12px' : '15px' }
      >
        {label}
        {mandatory && <Text style={{color: Colors.yellow}}> *</Text>}
      </StyledLabel>
    </Animatable.View>
  );
};


export default Label;