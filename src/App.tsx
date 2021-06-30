import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";
import { Logged } from "./components/Logged/Logged";
import { Routes } from "./components/Routes/Routes";
import { TopNavbar } from "./components/TopNavbar/TopNavbar";
import { useAppDispatch, useAppState } from "./context/state";
import { getCollection } from "./database/collection";

function App() {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { wordsCollection } = useAppState();
  const dispatch = useAppDispatch();

  // User 
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsLoading(false);
        setUser(user);
      });
    return () => unregisterAuthObserver();
  }, []);

  // User collection
  useEffect(() => {
    user && user?.uid && 
      (async function () {
        const collection = await getCollection();
        dispatch({ type: "updateWordsCollection", payload: collection });
      })();
  }, [dispatch, user]);

  return (
    <>
      <HashRouter>
        <TopNavbar />
        <Routes />
      </HashRouter>
      {user && wordsCollection && <Logged />}
      {isLoading && <LoadingSpinner />}
    </>
  );
}

export default App;
