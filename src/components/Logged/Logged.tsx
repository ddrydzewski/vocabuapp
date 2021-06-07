/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import { useEffect } from "react";
import { useAppDispatch } from "../../context/state";
import { getCollection } from "../../database/collection";
import { useQueryWords } from "../../database/useQueryWords";
import { IWords } from "../../types/IWords";

export const Logged = () => {
  const [words, setWords] = React.useState<IWords[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async function () {
      initFirestore();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch({ type: "updateWords", payload: words });
  }, [dispatch, words]);

  const initFirestore = async () => {
    const collection = await getCollection();
    const data = await useQueryWords(collection);
    dispatch({ type: "updateWords", payload: data });
    dispatch({ type: "updateWordsCollection", payload: collection });
    dispatch({ type: "updateIsFetched", payload: true });
    setWords(data);
  };

  return null;
};
