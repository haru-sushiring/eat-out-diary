import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// const navigate = useNavigate();
// const onSubmit = document.getElementById("onSubmit");
// onSubmit.addEventListener("click", () => {
//   navigate("/comp");
// });

function FormComp() {
  const location = useLocation();
  const formData = location.state;
  return (
    <>
      <h2>登録完了</h2>
      <p>お店の名前: {formData.name}</p>
      <p>行った日: {formData.date}</p>
      <p>評価: {formData.review}</p>
      <p>感想: {formData.text}</p>
    </>
  );
}

export default FormComp;
