import styled from "styled-components/native";

const StyledGotham = styled.Text`
    background-color: transparent;
    font-family: Gotham;
    color: ${(props) => props.color ? props.color : props.theme.container.Colors.light.primaryLight};
    font-weight: ${(props) => props.fontWeight ?? "700"};
    font-size: ${(props) => props.fontSize ?? "26px"};
    text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
`;

export default StyledGotham;