import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const LoginPage = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log in with Google</button>

      {user && (
        <>
          <p>{`User: ${user.displayName}, Email: ${user.email}`}</p>
          <Link to="/form">登録ページへ</Link>
        </>
      )}

      <div id="sign-in-status"></div>
      <div id="sign-in"></div>
      <pre id="account-details"></pre>
    </>
  );
};

export default LoginPage;
