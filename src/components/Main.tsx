/* eslint-disable react-hooks/rules-of-hooks */
import { Grid } from "precise-ui";
import * as React from "react";
import { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { useAppDispatch, useAppState } from "../context/state";
import { getCollection } from "../database/collection";
import { useQueryWords } from "../database/useQueryWords";
import { IWords } from "../types/IWords";
import { Header } from "./Header/Header";
import { LoadingSpinner } from "./LoadingSpinner/LoadingSpinner";
import { Routes } from "./Routes/Routes";
import { Sidebar } from "./Sidebar/Sidebar";

interface IProps {
  userID: string;
}

export const Main: React.FC<IProps> = ({ userID }) => {
  const { wordsCollection, isFetched} = useAppState();
  const [isFinish, setIsFinish] = React.useState(false);
  const [words, setWords] = React.useState<IWords[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsFinish(isFetched);
    console.log(isFinish);

    dispatch({ type: "updateWords", payload: words });
  }, [dispatch, isFetched, isFinish, words]);

  useEffect(() => {
    (async function () {
      setCollection().then(getWords);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCollection = async () => {
    const collection = await getCollection(userID);
    dispatch({ type: "updateWordsCollection", payload: collection });
  };

  const getWords = async () => {
    if (wordsCollection) {
      const data = await useQueryWords(wordsCollection);
      dispatch({ type: "updateWords", payload: data });
      dispatch({ type: "updateIsFetched", payload: true });
      setWords(data);
      console.log(data);
    }
  };

  return (
    <>
      {isFinish ? (
        <HashRouter>
          <Header />
          <Grid rows={1} columns={["15rem", "1fr"]}>
            <Sidebar />
            <Routes />
          </Grid>
        </HashRouter>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};
