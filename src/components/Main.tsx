import { Grid } from "precise-ui/dist/es6";
import * as React from "react";
import { HashRouter } from "react-router-dom";
import { useAppDispatch } from "../context/state";
import { useQueryWords } from "../database/init";
import { Routes } from "./Routes/Routes";
import { Sidebar } from "./Sidebar/Sidebar";

export const Main = () => {
  const dispatch = useAppDispatch();
  const { words } = useQueryWords();

  React.useEffect(() => {
    dispatch({ type: "updateWords", payload: words });
  }, [dispatch, words]);

  return (
    <>
      <HashRouter>
        <Grid rows={1} columns={["15rem", "1fr"]}>
          <Sidebar />
          <Routes />
        </Grid>
      </HashRouter>
    </>
  );
};
