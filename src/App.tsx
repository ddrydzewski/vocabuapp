import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";
import { Logged } from "./components/Logged/Logged";
import { Routes } from "./components/Routes/Routes";
import { TopNavbar } from "./components/TopNavbar/TopNavbar";

function App() {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsLoading(false);
        setUser(user);
      });
    return () => unregisterAuthObserver();
  }, []);

  return (
    <>
      <HashRouter>
        <TopNavbar />
        <Routes />
      </HashRouter>
      {user && <Logged />}
      {isLoading && <LoadingSpinner />}
    </>
  );
}

export default App;
