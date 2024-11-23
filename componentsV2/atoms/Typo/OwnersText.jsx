import React from "react";
import { Native } from "../../nanites";

const OwnersText = (props) => {
    const defaultText = "text not working";
    return <Native.StyledOwnersText {...props}>{props.text ? props.text : defaultText}</Native.StyledOwnersText>;
}

export default OwnersText;