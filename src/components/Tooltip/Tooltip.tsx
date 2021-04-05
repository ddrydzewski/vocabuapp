import React from "react";
import { NavLink } from "react-router-dom";
import { LinkStyled } from "../style";
import { HeaderContainer, Item, ListItems } from "./style";

export const Tooltip = () => {
  return (
    <HeaderContainer>
      <ListItems>
        <Item>
          <LinkStyled>
            <NavLink to="/words">Words</NavLink>
          </LinkStyled>
        </Item>
        <Item>
          <LinkStyled>
            <NavLink to="/random">
              <LinkStyled>Random</LinkStyled>
            </NavLink>
          </LinkStyled>
        </Item>
      </ListItems>
    </HeaderContainer>
  );
};
