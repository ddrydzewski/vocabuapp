import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LinkStyled } from "../style";
import { CardsModeContainer } from "./style";

export const TopBar = () => {
  const [changeMode, setChangeMode] = useState(false);

  const hangleChangeMode = () => {
    setChangeMode(!changeMode);
  };

  return (
    <CardsModeContainer>
      {changeMode ? (
        <LinkStyled >
          <NavLink to="/words" onClick={hangleChangeMode}>
            Random
          </NavLink>
        </LinkStyled>
      ) : (
        <LinkStyled>
          <NavLink to="/random" onClick={hangleChangeMode}>
            Words
          </NavLink>
        </LinkStyled>
      )}
    </CardsModeContainer>
  );
};
