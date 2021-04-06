import * as React from "react";
import { IWords } from "../types/IWords";

type Action =
  | { type: "updateWords"; payload: IWords[] }
  | { type: "updateIsModalOpen"; payload: boolean }
  | { type: "updateIsEditMode"; payload: boolean }
  | { type: "updateModalCard"; payload: IWords };

type Dispatch = (action: Action) => void;

type State = {
  words: IWords[] | undefined;
  isModalOpen: boolean;
  isEditMode: boolean;
  modalCard?: IWords;
};
type StateProviderProps = { children: React.ReactNode };

const AppStateContext = React.createContext<State | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined);

const initAppState: State = { words: [] , isEditMode: false, isModalOpen: false};

function appStateReducer(state: State, action: Action) {
  switch (action.type) {
    case "updateWords": {
      return { ...state, words: action.payload };
    }
    case "updateIsModalOpen": {
      return { ...state, isModalOpen: action.payload};
    }
    case "updateIsEditMode": {
      return { ...state, isEditMode: action.payload};
    }
    case "updateModalCard": {
      return { ...state, modalCard: action.payload};
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

