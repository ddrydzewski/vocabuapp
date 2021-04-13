import React from "react";
import { NavLink } from "react-router-dom";
import { LinkStyled } from "../style";
import { HeaderContainer, SidebarElements, SidebarStyled } from "./style";

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
        <LinkStyled style={{marginBottom: "15%"}}>
          <NavLink to="/words">Words</NavLink>
        </LinkStyled>
        <LinkStyled style={{marginBottom: "15%"}}>
          <NavLink to="/random">Random</NavLink>
        </LinkStyled>
        <LinkStyled>
          <NavLink to="/test">Test</NavLink>
        </LinkStyled>
      </SidebarElements>
    </SidebarStyled>
  );
};
