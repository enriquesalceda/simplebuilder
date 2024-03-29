import React from "react";

export const Text = ({text, fontSize}) => {
    return (
        <div style={{fontSize}}>
            <p>{text}</p>
        </div>
    )
}