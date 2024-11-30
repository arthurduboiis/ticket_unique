import React from "react";
import { Native } from "../../nanites";
import { useThemeColor } from "../../../hooks/useThemeColor";

const OwnersText = (props) => {
    const defaultText = "text not working";
    return <Native.StyledOwnersText color={props.color ? props.color : useThemeColor('primaryLight')} {...props} />;
}

export default OwnersText;