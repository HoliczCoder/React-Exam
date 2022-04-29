import React, { cloneElement, useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import Add from "../components/Add";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  limitToLast,
  limit,
  where,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { async } from "@firebase/util";

export default function User() {
  const [todos, setTodos] = useState([]);
  const [newCateogry, setNewCateogry] = useState([]);
  const [content, setNewContent] = useState("");
  const [title, setTitle] = useState("");

  ///////////////////////////////////////////////
  let unsub = null;
  useEffect(() => {
    (async () => {
      const collectionRef = collection(db, "newCateogry");

      unsub = onSnapshot(collectionRef, (snapShot) => {
        const localTodos = [];
        snapShot.forEach((doc) => {
          localTodos.push({
            id: doc.id,
            category: doc.data().category,
            time: doc.data()?.time?.seconds,
          });
        });
        setTodos(localTodos.sort((a, b) => a.time - b.time));
        console.log(localTodos[localTodos.length - 1].category);
        setNewCateogry(localTodos[localTodos.length - 1].category);
        // console.log("ban gi moi nhat", newCateogry);
      });
    })();
  }, []);

  const lookingArticle = async (todo) => {
    const citiesRef = collection(db, "NewDatabase");
    const q = query(citiesRef, where("category", "==", todo));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setNewContent(doc.data().content);
      setTitle(doc.data().title);
    });
  };
  return (
    <div>
      <div>Danh muc san pham</div>
      {newCateogry.map((todo, index) => (
        <div key={index} className=" w-50 h-50  bg-green-500">
          <button onClick={() => lookingArticle(todo)}>{todo}</button>
        </div>
      ))}
      <div> {title} </div>
      <div>{content}</div>
    </div>
  );
}
