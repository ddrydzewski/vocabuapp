import { useEffect } from "react";
import { useAppDispatch, useAppState } from "../../context/state";
import { useQueryWords } from "../../database/useQueryWords";
import { getCategories } from "../../utilts/category/getCategories";
import { getWordsFromCategory } from "../../utilts/category/getCategorizedWords";
import { getWordsFromULevel } from "../../utilts/understandLevel/getWordsFromULevel";
import { CardModal } from "../Cards/CardModal/CardModal";

export const Logged = () => {
  const { words, currentCategory, currentULevels } = useAppState();
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
    if (words.length > 0) {
      dispatch({
        type: "updateCurrentWords",
        payload: getWordsFromULevel(
          getWordsFromCategory(words, currentCategory),
          currentULevels
        ),
      });
    }
  }, [currentULevels, currentCategory, words, dispatch]);

  useEffect(() => {
    if (words.length > 0) {
      const dataCategories = getCategories(words);
      dispatch({ type: "updateCategories", payload: dataCategories });
    }
  }, [words, dispatch]);

  return <CardModal />;
};
