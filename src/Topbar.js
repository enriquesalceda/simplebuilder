import React from "react";
import { Box, FormControlLabel, Switch, Grid, Button as MaterialButton } from "@mui/material";

export const Topbar = () => {
    return (
    <Grid container alignItems="center" bgcolor="#cbe8e7" style={{marginTop: "20px"}}>
        <Grid item xs>
            <FormControlLabel
                control={<Switch checked={true} />}
                label="Enable"
            />
        </Grid>
        <Grid item>
            <MaterialButton size="small" variant="outlined" color="secondary">Serialize JSON to console</MaterialButton>
        </Grid>
    </Grid>
    )
};