import React from "react";
import { NavLink } from "react-router-dom";
import { LinkStyled } from "../style";
import { StartButton, StartText } from "./style";

export const Starter = () => {
  return (
    <StartText>
      <h1>Learning with Vocabu</h1>
      <h2>Its easy and simple</h2>
      <StartButton>
        <LinkStyled>
          <NavLink to="/words">Get Started</NavLink>
        </LinkStyled>
      </StartButton>
    </StartText>
  );
};
