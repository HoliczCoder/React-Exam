import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Add = () => {
  const [message, setMessage] = useState("");
  const _add = async () => {
    console.log(message);
    if (!message) {
      alert("Nhập vào rồi hãy submit bạn ơi");
      return;
    }
    const collectionRef = collection(db, "nowhere"); // cai nay cung tao ra document moi duoc
    try {
      await addDoc(collectionRef, {
        message,
      });
    } catch (e) {
      console.log(e);
    }
    console.log("add thanh cong");
    setMessage("");
  };
  return (
    <div>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans ">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
              <input
                type="text"
                onChange={(evt) => setMessage(evt.target.value)}
                value={message}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
              ></input>

              <button
                onClick={_add}
                value={message}
                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
