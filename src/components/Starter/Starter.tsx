import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { StartText } from "./style";

export const Starter = () => {
  return (
    <StartText>
      <h1>Learning with Vocabu</h1>
      <h2>easy and simple</h2>
      <Button variant="secondary" size="lg">
        <NavLink to="/signin">Get Started</NavLink>
      </Button>
    </StartText>
  );
};
