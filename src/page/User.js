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

export default function User() {
  const [todos, setTodos] = useState([]);
  let unsub = null;
  useEffect(() => {
    console.log("use effect bi goi lai");
    (async () => {
      const collectionRef = collection(db, "nowhere");
      //const collectionQuery = query(collectionRef, limit(3));
      unsub = onSnapshot(collectionRef, (snapShot) => {
        //console.log("data been changed");
        /*  localTodos.push({ id: doc.id, message: doc.data().message }); */
        const localTodos = [];
        snapShot.forEach((doc) => {
          localTodos.push({ id: doc.id, message: doc.data().message });
        });
        setTodos(localTodos);
        console.log(localTodos);
      });
      /*       const snapShot = await getDocs(collectionRef);
      snapShot.forEach((doc) =>
        localTodos.push({ id: doc.id, message: doc.data().message })
      ); */
      //console.log("du lieu " + localTodos);
    })();
  }, []);

  const deleteNote = async (id) => {
    const docRef = doc(db, "nowhere", id);
    await deleteDoc(docRef);
  };
  return (
    <div>
      <Add></Add>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo.message}
          <Link to={`/edit?id=${todo.id}`}> Edit </Link>
          <button onClick={() => deleteNote(todo.id)}>Delete Note</button>
        </div>
      ))}
    </div>
  );
}
