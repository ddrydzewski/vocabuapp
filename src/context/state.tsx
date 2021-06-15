import firebase from "firebase";
import * as React from "react";
import { IWords } from "../types/IWords";
import { IWordsFirebase } from "../types/IWordsFirebase";

type Action =
  | { type: "updateWords"; payload: IWords[] }
  | { type: "updateIsModalOpen"; payload: boolean }
  | { type: "updateIsEditMode"; payload: boolean }
  | { type: "updateModalCard"; payload: IWords }
  | { type: "updateIsFetched"; payload: boolean }
  | { type: "updateIsTranslationSide"; payload: boolean }
  | { type: "updateCategories"; payload: string[] }
  | { type: "updateCurrentCategory"; payload: string }
  | {
      type: "updateWordsCollection";
      payload: firebase.firestore.CollectionReference<IWordsFirebase>;
    }

type Dispatch = (action: Action) => void;

type State = {
  words: IWords[];
  isModalOpen: boolean;
  isEditMode: boolean;
  modalCard?: IWords;
  isFetched: boolean;
  isTranslationSide: boolean;
  categories: string[];
  currentCategory: string;
  wordsCollection?: firebase.firestore.CollectionReference<IWordsFirebase>;
};
type StateProviderProps = { children: React.ReactNode };

const AppStateContext = React.createContext<State | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined);

const initAppState: State = {
  words: [],
  isEditMode: false,
  isModalOpen: false,
  isFetched: false,
  isTranslationSide: false,
  categories: ["all"],
  currentCategory: "all",
};

function appStateReducer(state: State, action: Action) {
  switch (action.type) {
    case "updateWords": {
      return { ...state, words: action.payload };
    }
    case "updateIsModalOpen": {
      return { ...state, isModalOpen: action.payload };
    }
    case "updateIsEditMode": {
      return { ...state, isEditMode: action.payload };
    }
    case "updateModalCard": {
      return { ...state, modalCard: action.payload };
    }
    case "updateIsFetched": {
      return { ...state, isFetched: action.payload };
    }
    case "updateIsTranslationSide": {
      return { ...state, isTranslationSide: action.payload };
    }
    case "updateCategories": {
      return { ...state, categories: action.payload };
    }
    case "updateCurrentCategory": {
      return { ...state, currentCategory: action.payload };
    }
    case "updateWordsCollection": {
      return { ...state, wordsCollection: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action!.type}`);
    }
  }
}

function AppStateProvider({ children }: StateProviderProps) {
  const [state, dispatch] = React.useReducer(appStateReducer, initAppState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useCountState must be used within a CountProvider");
  }
  return context;
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useCountDispatch must be used within a CountProvider");
  }
  return context;
}

export { AppStateProvider, useAppState, useAppDispatch };

