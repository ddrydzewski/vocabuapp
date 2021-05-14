/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { useAppDispatch, useAppState } from "../context/state";
import { getCollection } from "../database/collection";
import { useQueryWords } from "../database/useQueryWords";
import { IWords } from "../types/IWords";
import { LoadingSpinner } from "./LoadingSpinner/LoadingSpinner";
import { Routes } from "./Routes/Routes";
import { TopNavbar } from "./TopNavbar/TopNavbar";

interface IProps {
  userID: string;
  userName: string;
}

export const Main: React.FC<IProps> = ({ userID , userName}) => {
  const { isFetched } = useAppState();
  const [isFinish, setIsFinish] = React.useState(false);
  const [words, setWords] = React.useState<IWords[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async function () {
      initFirestore();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsFinish(isFetched);
    dispatch({ type: "updateWords", payload: words });
  }, [dispatch, isFetched, words]);

  const initFirestore = async () => {
    const collection = await getCollection(userID);
    const data = await useQueryWords(collection);
    dispatch({ type: "updateWords", payload: data });
    dispatch({ type: "updateWordsCollection", payload: collection });
    dispatch({ type: "updateIsFetched", payload: true });
    setWords(data);
  };

  return (
    <>
      {isFinish ? (
        <HashRouter>
          <TopNavbar userName={userName} />
          <Routes />
        </HashRouter>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};
