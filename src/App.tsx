import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { SignIn } from './components/Auth/SignIn';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { Main } from './components/Main';

function App() {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsLoading(false);
      setUser(user);
    });
    return () => unregisterAuthObserver();
  }, []);

  return (
    <>
      {user ? <Main /> : <SignIn />}
      {isLoading && <LoadingSpinner />}
    </>
  );
}

export default App;
