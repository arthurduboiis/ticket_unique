import React from 'react'
import styled from 'styled-components/native';
import { useThemeColor } from '../../../hooks/useThemeColor';


const StyledInputText = styled.TextInput`
  background-color: ${(props) =>
    props.isFocused ? useThemeColor("thirdDark") : useThemeColor("secondaryDark")};
  font-size: ${(props) => props.fontSize ? props.fontSize : "16px"};
  border-radius: 5px;
  padding-horizontal: 20px;
  padding-vertical: 10px;
  width: ${(props) => props.width ? props.width : "100%"};
  color: ${(props) => props.color };
  placeholderTextColor: ${(props) => props.placeholderTextColor ? props.placeholderTextColor : useThemeColor("dimmedLight")};
`;



const Base = ({ value, onChangeText, onBlur, onFocus,...props }) => (
  <StyledInputText
    value={value}
    onChangeText={onChangeText}
    placeholderTextColor={useThemeColor("dimmedLight")}
    onBlur={onBlur}
    onFocus={onFocus}
    color={useThemeColor("primaryLight")}
    {...props}
  />
);

export default Base