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
} from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Admin() {
  const [todos, setTodos] = useState([]);
  let unsub = null;
  useEffect(() => {
    (async () => {
      const collectionRef = collection(db, "database");
      //const collectionQuery = query(collectionRef, limit(3));
      unsub = onSnapshot(collectionRef, (snapShot) => {
        //console.log("data been changed");
        /*  localTodos.push({ id: doc.id, message: doc.data().message }); */
        const localTodos = [];
        snapShot.forEach((doc) => {
          //console.log("hello", doc.data().category);
          localTodos.push({
            id: doc.id,
            category: doc.data().category,
            content: doc.data().content,
            title: doc.data().title,
          });
        });
        setTodos(localTodos);
        console.log(localTodos);
      });
    })();
  }, []);

  const deleteNote = async (id) => {
    const docRef = doc(db, "database", id);
    await deleteDoc(docRef);
  };
  return (
    <div>
      <div>Hello this is Administration</div>
      <Add></Add>
      {todos.map((todo, index) => (
        <div key={index}>
          <span className=" px-5 bg-red-500"> {todo.title}</span>
          <span className=" px-5 bg-red-500"> {todo.content}</span>
          <span className=" px-5 bg-red-500"> {todo.category}</span>

          <Link to={`/edit?id=${todo.id}`}> Edit </Link>
          <button onClick={() => deleteNote(todo.id)}>Delete Data</button>
        </div>
      ))}
    </div>
  );
}
