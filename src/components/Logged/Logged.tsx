import { useEffect, useState } from "react";
import { useAppDispatch, useAppState } from "../../context/state";
import { useQueryWords } from "../../database/useQueryWords";
import { getCategories } from "../../utilts/category/getCategories";
import { getWordsFromCategory } from "../../utilts/category/getCategorizedWords";
import { CardModal } from "../Cards/CardModal/CardModal";

export const Logged = () => {
  const { words, categories, currentCategory } = useAppState();
  const [isCategory, setIsCategory] = useState(false);
  const dataWords = useQueryWords();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: "updateWords", payload: dataWords });
  }, [dispatch, dataWords]);

  useEffect(() => {
    dispatch({
      type: "updateCurrentWords",
      payload: getWordsFromCategory(words, currentCategory),
    });
  }, [words, currentCategory, dispatch]);

  useEffect(() => {
    if (words.length > 0 && !isCategory) {
      const dataCategories = getCategories(words);
      dispatch({ type: "updateCategories", payload: dataCategories });

      setIsCategory(true);
    }
  }, [categories, words, dispatch, isCategory]);

  return <CardModal />;
};
