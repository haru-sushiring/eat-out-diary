import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopPage from './components/TopPage';
import FormPage from './components/FormPage';
import FormComp from './components/FormComp';
import ListPage from './components/ListPage';

import firebase from "firebase/app";
import "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_Storage_Bucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_Messaging_Sender_ID,
  appId: process.env.REACT_APP_FIREBASE_App_Id,
  measurementId: process.env.REACT_APP_FIREBASE_Measurement_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="comp" element={<FormComp />} />
        <Route path="list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
