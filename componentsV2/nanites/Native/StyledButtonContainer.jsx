import styled from "styled-components/native";

const StyledButtonContainer = styled.Pressable`
  padding-horizontal: ${(props) => props.paddingHorizontal ? props.paddingHorizontal : props.theme.container.padding.horizontal};
  padding-vertical: ${(props) => props.paddingVertical ? props.paddingVertical : props.theme.container.padding.vertical};
  background-color: ${(props) => props.bgColor ? props.bgColor : props.theme.container.Colors.light.transparent};
  ${(props) => props.marginBottom ? "margin-bottom:" +props.marginBottom + ";": ""};
  ${(props) => props.height ? "height:" +props.height + ";": ""};
  ${(props) => props.width ? "width:" +props.width + ";": ""};
  ${(props) => props.borderRadius ? "border-radius:" + props.borderRadius + "px;": ""};
  align-self: flex-start;
  ${(props) => props.position ? "position:" + props.position + ";": ""};
  ${(props) => props.top ? "top:" +props.top + ";": ""};
  ${(props) => props.right ? "right:" +props.right + ";": ""};
  ${(props) => props.bottom ? "bottom:" +props.bottom + ";": ""};
  ${(props) => props.left ? "left:" +props.left + ";": ""};
  ${(props) => props.zIndex ? "z-index:" +props.zIndex + ";": ""};
  ${(props) => props.flex ? "flex:" +props.flex + ";": ""};

  ${(props) => props.flexDirection ? "flex-direction:" +props.flexDirection + ";": ""};
  ${(props) => props.justifyContent ? "justify-content:" +props.justifyContent + ";": ""};
  ${(props) => props.alignItems ? "align-items:" +props.alignItems + ";": ""};
  ${(props) => props.alignSelf ? "align-self:" +props.alignSelf + ";": ""};
  ${(props) => props.gap ? "gap:" +props.gap + ";": ""};
`;

export default StyledButtonContainer;