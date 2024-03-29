import React  from "react";
import { Button } from "@mui/material";

export const Button = ({size, variant, color, children}) => {
    return (
        <Button size={size} variant={variant} color={color}>
            {children}
        </Button>
    )
}