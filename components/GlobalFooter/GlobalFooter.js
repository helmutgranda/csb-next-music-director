import React from 'react';
import Link from "next/link";
import { Button, Content, Grid, Row, Column } from "carbon-components-react";

const GlobalFooter = () => (
  <>
    <Grid>
      <Row>
        <Column><h3>NExtMusicDirector</h3>
        <p>The idea behind music director comes from the need of students be able to practice and be able to follow the cords along.</p>
        </Column>
        <Column>
        <h4>Popular Sheets</h4>
        <p>Sheet 5</p>
        <p>Sheet 8</p>
        <p>Sheet 9</p>
        </Column>
        <Column>
        <h4>New Sheets</h4>
        <p>Sheet 1</p>
        <p>Sheet 2</p>
        <p>Sheet 3</p>
        </Column>
        <Column><h4>Tutorial</h4>
        <p>Click on New</p>
        <p>Input cords a-g or A-G</p>
        <p>Click on Play</p>
        </Column>
      </Row>
    </Grid>
  </>
);
export default GlobalFooter;