import styled from "styled-components/native";

const StyledImageBase = styled.ImageBackground`
    background-color: ${(props) => props.backgroundColor ?? "transparent"};
    width: ${(props) => props.width ?? "140px"};
    height: ${(props) => props.height ?? "140px"};
    object-fit: contain;
`;

export default StyledImageBase;