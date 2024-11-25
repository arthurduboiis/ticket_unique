import styled from "styled-components/native";


const StyledButton = styled.Pressable`
  padding-horizontal: ${(props) => props.paddingHorizontal ? props.paddingHorizontal : props.theme.container.button.padding.horizontal};
  padding-vertical: ${(props) => props.paddingVertical ? props.paddingVertical : props.theme.container.button.padding.vertical};
  background-color: ${(props) => props.bgColor ? props.bgColor : props.theme.container.Colors.light.yellow};
  ${(props) => props.height ? "height:" +props.height + ";": ""};
  ${(props) => props.width ? "width:" +props.width + ";": ""};
  border-radius: ${(props) => props.borderRadius ? props.borderRadius + 'px' : props.theme.container.button.borderRadius};
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props) => props.alignItems ? props.alignItems : 'center'};
  gap: ${(props) => props.gap ? props.gap + 'px' : '0px'};
  ${(props) => props.position ? "position:" + props.position + ";": ""};
  ${(props) => props.top ? "top:" +props.top + ";": ""};
  ${(props) => props.right ? "right:" +props.right + ";": ""};
  ${(props) => props.bottom ? "bottom:" +props.bottom + ";": ""};
  ${(props) => props.left ? "left:" +props.left + ";": ""};
`;

export default StyledButton;
