import styled from "styled-components/native";

const StyledInputText = styled.TextInput`
  background-color: ${(props) =>
    props.isFocused ? props.focusBackgroundColor ?? "#141414" : props.backgroundColor ?? "#141414"};
  font-size: ${(props) => props.fontSize ? props.fontSize : "16px"};
  border-radius: 10px;
  border-color: ${(props) =>
    props.isFocused ? props.focusBorderColor ?? "black" : props.borderColor ?? "black"};
  border-width: 1px;
  padding: 10px;
  margin: 10px;
  width: ${(props) => props.width ? props.width : "100%"};
  color: ${(props) => props.color ?? "white"};
  placeholderTextColor: ${(props) => props.placeholderTextColor ? props.placeholderTextColor : "white"};
`;

export default StyledInputText;
