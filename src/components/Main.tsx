import * as React from "react";
import { HashRouter, NavLink } from "react-router-dom";
import { useAppDispatch } from "../context/state";
import { useQueryWords } from "../database/init";
import { Routes } from "./Route/Routes";
import { HaOneStyled, HeaderContainer, LinkStyled } from "./style";
import { Tooltip } from "./Tooltip/Tooltip";

export const Main = () => {
  const dispatch = useAppDispatch();
  const { words } = useQueryWords();

  React.useEffect(() => {
    dispatch({ type: "updateWords", payload: words });
  }, [dispatch, words]);

  return (
    <>
      <HashRouter>
        <HeaderContainer>
          <HaOneStyled>
            <LinkStyled>
              <NavLink exact to="/">
                Vocabu
              </NavLink>
            </LinkStyled>
          </HaOneStyled>
        </HeaderContainer>
        <Tooltip />
        <Routes />
      </HashRouter>
    </>
  );
};
