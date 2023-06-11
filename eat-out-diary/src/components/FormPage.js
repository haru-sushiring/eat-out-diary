import React from "react";
import FormComp from "./FormComp";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    console.log(data.name);
    navigate("/comp", {
      state: {
        name: data.name,
        date: data.date,
        review: data.review,
        text: data.text,
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">お店の名前</label>
        <input id="name" {...register("name")} />
        <label htmlFor="date">行った日</label>
        <input id="date" {...register("date")} />
        <label htmlFor="review">評価</label>
        <input id="review" {...register("review")} />
        <label htmlFor="text">感想</label>
        <input id="text" {...register("text")} />
        <button type="submit">登録</button>
      </form>
    </>
  );
}

export default FormPage;
