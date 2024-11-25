import React from 'react'
import styled from 'styled-components/native';
import { Colors } from '../../../constants/Colors';


const StyledInputText = styled.TextInput`
  background-color: ${(props) =>
    props.isFocused ? Colors.light.thirdDark : Colors.light.secondaryDark};
  font-size: ${(props) => props.fontSize ? props.fontSize : "16px"};
  border-radius: 5px;
  padding-horizontal: 20px;
  padding-vertical: 10px;
  width: ${(props) => props.width ? props.width : "100%"};
  color: ${(props) => props.color ?? "white"};
  placeholderTextColor: ${(props) => props.placeholderTextColor ? props.placeholderTextColor : Colors.light.dimmedLight};
`;



const Base = ({ value, onChangeText, onBlur, onFocus,...props }) => (
  <StyledInputText
    value={value}
    onChangeText={onChangeText}
    placeholderTextColor={Colors.light.dimmedLight}
    onBlur={onBlur}
    onFocus={onFocus}
    {...props}
  />
);

export default Base