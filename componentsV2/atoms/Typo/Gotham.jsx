import React from "react";
import { Native } from "../../nanites";

const Gotham = (props) => {
    const defaultText = "Default Text";
    return <Native.StyledGotham {...props}>{props?.text ? props?.text : defaultText}</Native.StyledGotham>;
}

export default Gotham;