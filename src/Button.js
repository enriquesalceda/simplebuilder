import React  from "react";
import { Button as MaterialButton } from "@mui/material";
import {useNode} from "@craftjs/core";

export const Button = ({size, variant, children}) => {
    const { connectors: {connect, drag } } = useNode();

    return (
        <MaterialButton size={size} variant={variant} ref={ ref => connect(drag(ref))} >
            {children}
        </MaterialButton>
    )
}