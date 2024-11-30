import React from "react";
import { Native } from "../../nanites";
import { useThemeColor } from "../../../hooks/useThemeColor";

const Gotham = (props) => {
    const defaultText = "Default Text";
    return <Native.StyledGotham color={useThemeColor('primaryLight')} {...props}>{props?.text ? props?.text : defaultText}</Native.StyledGotham>;
}

export default Gotham;