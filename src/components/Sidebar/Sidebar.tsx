import React from "react";
import { NavLink } from "react-router-dom";
import { firebaseApp } from "../../database/core";
import { LinkStyled } from "../style";
import { BoxElement, SidebarElements, SidebarStyled } from "./style";

export const Sidebar = () => {
  const handleLogout = () => firebaseApp.auth().signOut();

  return (
    <SidebarStyled>
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
        <LinkStyled onClick={handleLogout} >
          <NavLink exact to="/">
            Log out
          </NavLink>
        </LinkStyled>
      </SidebarElements>
    </SidebarStyled>
  );
};
