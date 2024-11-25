import { styled } from "styled-components/native";

const StyledTitleH2 = styled.Text`
    background-color: transparent;
    font-family: OwnersText;
    color: ${(props) => props.color ? props.color : props.theme.container.Colors.light.primaryLight};
    font-weight: ${(props) => props.fontWeight ?? "400"};
    font-size: ${(props) => props.fontSize ?? "16px"};
    ${(props) => props.uppercase ? "text-transform: uppercase;" : ""};
    ${(props) => props.underline ? "textDecorationLine: underline;" : ""};
    ${(props) => props.textAlign ? "textAlign:" + props.textAlign + ";" : ""};
    ${(props) => props.padddingTop ? "paddingTop:" + props.padddingTop + ";" : ""};
`;

export default StyledTitleH2;