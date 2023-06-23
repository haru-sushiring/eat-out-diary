import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "firebase/auth";

function FormPage() {
  const auth = getAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // ユーザーのログイン状態の監視
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // ログインしている場合、ユーザー情報を利用する処理をここに書く
        setUserId(user.uid);
        uploadImage(user.uid, imageFile);
      } else {
        // ログインしていない場合の処理
        console.log("ログインしていない");
      }
    });

    return () => unsubscribe();
  }, [auth, imageFile]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const uploadImage = async (userId, imageFile) => {
    // imageFile の値が null の場合は処理を中断
    if (!imageFile) {
      console.log("画像ファイルがありません");
      return;
    }
    // Firebase Storageに参照を作成
    const storage = getStorage();
    const storageRef = ref(storage, `${userId}/${imageFile.name}`);

    // 画像をアップロード
    await uploadBytes(storageRef, imageFile);

    // アップロードされた画像のURLを取得
    const downloadUrl = await getDownloadURL(storageRef);
    setImageUrl(downloadUrl);
  };

  const onSubmit = async (data) => {
    // フォームデータを確認
    console.log(data);

    // 画像が選択されていない場合は処理を中断
    if (!imageFile) {
      console.log("画像が選択されていません");
      return;
    }

    // 画像のアップロードが完了していない場合は処理を中断
    if (!imageUrl) {
      console.log("画像のアップロードが完了していません");
      return;
    }

    console.log(data.name);
    navigate("/comp", {
      state: {
        name: data.name,
        date: data.date,
        review: data.review,
        text: data.text,
        image: imageUrl,
      },
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
        <label htmlFor="image">写真</label>
        <input id="image" type="file" onChange={handleImageChange} />
        <button type="submit">登録</button>
      </form>
    </>
  );
}

export default FormPage;
