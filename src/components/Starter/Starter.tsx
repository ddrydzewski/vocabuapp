import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LinkStyled } from "../style";
import { StartText } from "./style";

export const Starter = () => {
  return (
    <StartText>
      <h1>Learning with Vocabu</h1>
      <h2>easy and simple</h2>
      <Button variant="secondary" size="lg">
        <LinkStyled>
          <NavLink to="/words">Get Started</NavLink>
        </LinkStyled>
      </Button>
    </StartText>
  );
};
