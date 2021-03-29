import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderContainer, Item, ListItems } from "./style";

export const Tooltip = () => {
  return (
    <HeaderContainer>
      <ListItems>
        <Item>
          <NavLink exact to="/">
            All Your Words
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/random">Random</NavLink>
        </Item>
      </ListItems>
    </HeaderContainer>
  );
};
