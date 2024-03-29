import React  from "react";
import { Button as MaterialButton } from "@mui/material";

export const Button = ({size, variant, children}) => {
    return (
        <MaterialButton size={size} variant={variant}>
            {children}
        </MaterialButton>
    )
}