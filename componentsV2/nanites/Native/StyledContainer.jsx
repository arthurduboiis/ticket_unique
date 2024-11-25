import styled from "styled-components/native";

const StyledContainer = styled.View`
  padding-horizontal: ${(props) => props.paddingHorizontal ? props.paddingHorizontal : '0px'};
  padding-vertical: ${(props) => props.paddingVertical ? props.paddingVertical : '0px'};
  ${(props) => props.paddingTop ? "padding-top:" +props.paddingTop + ";": ""};
  ${(props) => props.paddingBottom ? "padding-bottom:" +props.paddingBottom + ";": ""};
  ${(props) => props.paddingLeft ? "padding-left:" +props.paddingLeft + ";": ""};
  ${(props) => props.paddingRight ? "padding-right:" +props.paddingRight + ";": ""};
  background-color: ${(props) => props.bgColor ? props.bgColor : props.theme.container.Colors.light.transparent};
  ${(props) => props.height ? "height:" +props.height + ";": ""};
  ${(props) => props.width ? "width:" +props.width + ";": ""};
  ${(props) => props.borderRadius ? "border-radius:" + props.borderRadius + "px;": ""};
  ${(props) => props.position ? "position:" + props.position + ";": ""};
  ${(props) => props.top ? "top:" +props.top + ";": ""};
  ${(props) => props.right ? "right:" +props.right + ";": ""};
  ${(props) => props.bottom ? "bottom:" +props.bottom + ";": ""};
  ${(props) => props.left ? "left:" +props.left + ";": ""};
  ${(props) => props.zIndex ? "z-index:" +props.zIndex + ";": ""};
  ${(props) => props.flexDirection ? "flex-direction:" +props.flexDirection + ";": ""};
  ${(props) => props.justifyContent ? "justify-content:" +props.justifyContent + ";": ""};
  ${(props) => props.alignItems ? "align-items:" +props.alignItems + ";": ""};
  ${(props) => props.alignSelf ? "align-self:" +props.alignSelf + ";": ""};
  ${(props) => props.flex ? "flex:" +props.flex + ";": ""};
  ${(props) => props.flexShrink ? "flex-shrink:" +props.flexShrink + ";": ""};
  ${(props) => props.flexGrow ? "flex-grow:" +props.flexGrow + ";": ""};
  ${(props) => props.gap ? "gap:" +props.gap + ";": ""};
`;

export default StyledContainer;