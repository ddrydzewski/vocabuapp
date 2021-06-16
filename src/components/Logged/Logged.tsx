import { useEffect, useState } from "react";
import { useAppDispatch, useAppState } from "../../context/state";
import { useQueryWords } from "../../database/useQueryWords";
import { getCategories } from "../../utilts/category/getCategories";

export const Logged = () => {
  const { words, categories } = useAppState();
  const [isCategory, setIsCategory] = useState(false)
  const dataWords = useQueryWords();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: "updateWords", payload: dataWords });
  }, [dispatch, dataWords]);

  useEffect(() => {
    if (words.length > 0 && !isCategory) {
      const dataCategories = getCategories(words);
      console.log(dataCategories);
      dispatch({ type: "updateCategories", payload: dataCategories });
      setIsCategory(true);
    }
  }, [categories, words, dispatch, isCategory]);

  useEffect(() => {
    if (words.length > 0 && categories.length >= 1) {
      dispatch({ type: "updateIsFetched", payload: true });
    } else {
      dispatch({ type: "updateIsFetched", payload: false });
    }
  }, [categories, words, dispatch]);

  return null;
};
