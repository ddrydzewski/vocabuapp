import firebase from "firebase";
import { useEffect, useState } from "react";
import { SignIn } from "./components/Auth/SignIn";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";
import { Main } from "./components/Main";

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
      {user ? <Main userID={user.uid} /> : <SignIn />}
      {isLoading && <LoadingSpinner />}
    </>
  );
}

export default App;
