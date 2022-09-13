import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../firebase/Firebase.init";

const useFirebase = () => {
  const [user, setUser] = useState([]);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser([]);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return { googleSignIn, user, logOut };
};

export default useFirebase;
