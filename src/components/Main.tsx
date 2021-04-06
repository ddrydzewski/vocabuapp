import * as React from "react";
import { HashRouter, NavLink } from "react-router-dom";
import { useAppDispatch } from "../context/state";
import { useQueryWords } from "../database/init";
import { Routes } from "./Routes/Routes";
import { HeaderContainer, LinkStyled } from "./style";
import { TopBar } from "./TopBar/TopBar";

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
          <LinkStyled style={{margin: '15px' ,marginLeft: '40px'}}>
            <NavLink exact to="/">
              Vocabu
            </NavLink>
          </LinkStyled>
        </HeaderContainer>
        <TopBar />
        <Routes />
      </HashRouter>
    </>
  );
};
