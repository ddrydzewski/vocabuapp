import React from "react";
import { NavLink } from "react-router-dom";
import { LinkStyled } from "../style";
import {
  BoxElement,
  HeaderContainer,
  SidebarElements,
  SidebarStyled
} from "./style";

export const Sidebar = () => {
  return (
    <SidebarStyled>
      <HeaderContainer>
        <LinkStyled style={{ margin: "15px", marginLeft: "30px" }}>
          <NavLink exact to="/">
            Vocabu
          </NavLink>
        </LinkStyled>
      </HeaderContainer>
      <SidebarElements>
        <BoxElement>
          <NavLink to="/words">Words</NavLink>
        </BoxElement>
        <BoxElement>
          <NavLink to="/random">Random</NavLink>
        </BoxElement>
        <BoxElement>
          <NavLink to="/test">Test</NavLink>
        </BoxElement>
      </SidebarElements>
    </SidebarStyled>
  );
};
