import React from "react";
import { Link } from "react-router-dom";
import FormPage from "./FormPage";

function TopPage() {
  return (
    <>
      <h1>外食記録アプリ</h1>

      <Link to="/form">登録ページへ</Link>
    </>
  );
}

export default TopPage;
