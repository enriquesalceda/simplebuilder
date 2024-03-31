import React from "react";
import {useNode} from "@craftjs/core";

export const Text = ({text, fontSize}) => {
    const { connectors: {connect, drag } } = useNode();

    return (
        <div style={{fontSize}} ref={ref => connect(drag(ref))}>
            <p>{text}</p>
        </div>
    )
}