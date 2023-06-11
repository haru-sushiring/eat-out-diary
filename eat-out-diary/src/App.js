import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopPage from './components/TopPage';
import FormPage from './components/FormPage';
import FormComp from './components/FormComp';
import ListPage from './components/ListPage';

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
