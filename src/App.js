import logo from './logo.svg';
import './App.css';

import React from 'react';
import {Typography, Paper, Grid} from "@mui/material";

import { Toolbox } from './Toolbox';
import { SettingsPanel } from './SettingsPanel';
import { Topbar } from './Topbar';

import { Container } from './Container';
import { Button } from './Button';
import { Card } from './Card';
import { Text } from './Text';

import {Editor, Element, Frame} from "@craftjs/core";

export default function App() {
  return (
      <div style={{margin: "0 auto", width: "800px", backgroundColor: "000" }}>
          <Typography variant="h5" align="center">A super simple page editor</Typography>
          <Editor resolver={{Card, Button, Text, Container}}>
              <Grid container spacing={3} style={{paddingTop: "10px"}}>
                  <Topbar />
                  <Grid item xs={8}>
                      <Frame>
                          <Container>
                              <Element is={Container} padding={5} background="#eee" canvas>
                                  <Card />
                                  <Button size="large" variant="outlined">Click</Button>
                                  <Element is={Container} padding={2} background="#eee" canvas>
                                    <Text size="medium" text="Hi world!" />
                                  </Element>
                              </Element>
                          </Container>
                      </Frame>
                  </Grid>
                  <Grid item xs={3}>
                      <Paper>
                          <Toolbox />
                          <SettingsPanel />
                      </Paper>
                  </Grid>
              </Grid>
          </Editor>
      </div>
  );
}
