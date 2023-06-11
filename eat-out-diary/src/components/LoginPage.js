import React from "react";
import firebase from "firebase/app";
import "firebase/auth";

const LoginPage = () => {
  const handleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log in with Google</button>
    </div>
  );
};

export default LoginPage;
