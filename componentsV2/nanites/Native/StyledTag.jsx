import styled from "styled-components/native";

const StyledTag = styled.View`
  background-color: ${(props) => props.bgColor ? props.bgColor : props.theme.container.colors.primaryLight};
  padding-horizontal: ${(props) => props.paddingHorizontal ? props.paddingHorizontal : props.theme.container.tag.padding.horizontal};
  padding-vertical: ${(props) => props.paddingVertical ? props.paddingVertical : props.theme.container.tag.padding.vertical};
  border-radius: 5px;
  ${(props) => props.alignSelf ? `align-self: ${props.alignSelf};` : ''}
`;

export default StyledTag;