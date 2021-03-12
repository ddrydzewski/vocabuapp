import { Table } from "precise-ui/dist/es6";
import * as React from "react";
import { useQueryWords } from "../../../database/init";
import { AllWordsContainer } from "./style";

export const AllWords = () => {
  const { words } = useQueryWords();
  return (
    <AllWordsContainer>
      <Table data={words}/>
    </AllWordsContainer>
  );
};
