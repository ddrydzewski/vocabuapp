import React from "react";
import { NavLink } from "react-router-dom";
import { LinkStyled } from "../style";
import { AuthContainer, HeaderContainer } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
        <LinkStyled style={{ marginLeft: "30px", padding: "15px" }}>
          <NavLink exact to="/">
            Vocabu
          </NavLink>
        </LinkStyled>
      <AuthContainer >
        <LinkStyled>
          <NavLink exact to="/">
            Log in
          </NavLink>
        </LinkStyled>
        <LinkStyled>
          <NavLink exact to="/">
            Sign up
          </NavLink>
        </LinkStyled>
      </AuthContainer>
    </HeaderContainer>
  );
};
