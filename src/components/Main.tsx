import * as React from "react";
import { HashRouter } from "react-router-dom";
import { useAppDispatch } from "../context/state";
import { useQueryWords } from "../database/init";
import { Contents } from "./Contents/Contents";
import { MainContainer } from "./style";
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
        <MainContainer>
          <h1>Vocabu</h1>
        </MainContainer>
        <Tooltip />
        <Contents />
      </HashRouter>
    </>
  );
};
