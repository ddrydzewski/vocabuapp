import React from "react";
import { NavLink } from "react-router-dom";
import {
  BoxElement,
  SidebarElements,
  SidebarStyled
} from "./style";

export const Sidebar = () => {
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
      </SidebarElements>
    </SidebarStyled>
  );
};
