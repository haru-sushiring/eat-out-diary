import React from "react";
import { Link } from "react-router-dom";

function TopPage() {
  return (
    <>
      <h1>外食記録アプリ</h1>
      <Link to="/login">ログインする</Link>      
    </>
  );
}

export default TopPage;
