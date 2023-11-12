import React, { useState } from "react";
import app from "../firebase.config";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export default function Login() {
  const [validUser, setValidUser] = useState(null);
  const auth = getAuth(app);
  const googleSignIn = new GoogleAuthProvider();
  const handleGoogleSignIn = async () => {
    const user = await signInWithPopup(auth, googleSignIn);
    try {
      const loggedUser = user.user;
      console.log(loggedUser);
      setValidUser(loggedUser);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignOut = () => {
    console.log("done");
    auth.signOut();
    setValidUser(null);
  };

  return (
    <div>
      {validUser ? (
        <button onClick={handleGoogleSignOut}>Google SIgn Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Google SIgn IN</button>
      )}
    </div>
  );
}
