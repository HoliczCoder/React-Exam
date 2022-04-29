import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { async } from "@firebase/util";

const Add = () => {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [allCat, setAllCat] = useState([]);
  const [showCat, setShowCat] = useState([]);

  ///

  useEffect(() => {});
  const updateCategory = () => {
    setShowCat((t) => [...t, allCat[allCat.length - 1]]);
    console.log(showCat);
    showCat.filter((item) => {
      if (item == null) return;
      console.log("co mang rong roi");
    });
    const collRef = collection(db, "newCateogry");
    (async () => {
      try {
        await addDoc(collRef, {
          category: showCat,
          time: serverTimestamp(),
        });
      } catch (e) {
        console.log(e);
      }
      console.log("gui len thanh cong");
    })();
  };

  const _upload = async (e) => {
    e.preventDefault();
    if (!title && !content && !category) {
      alert("Nhập vào het roi hãy submit bạn ơi");
      return;
    }
    console.log(category);
    const collectionRef = collection(db, "NewDatabase"); // cai nay cung tao ra document moi duoc

    ///////////////////////////////////
    try {
      await addDoc(collectionRef, {
        title: title,
        content: content,
        category: category,
        timestamp: serverTimestamp(),
      });
    } catch (e) {
      console.log(e);
    }
    ///////////////////////////////////

    ////////////////////////////////////
    console.log("add thanh cong");
  };
  return (
    <div>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans ">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Uploading your Data</h1>
            <div className="flex mt-4">
              <form onSubmit={(e) => _upload(e)}>
                <input
                  type="text"
                  onChange={(evt) => setTitle(evt.target.value)}
                  value={title}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  placeholder="Add title"
                ></input>
                <textarea
                  onChange={(evt) => setContent(evt.target.value)}
                  value={content}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  placeholder="Add content"
                ></textarea>

                <div>
                  {showCat.map((item, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        name="fav_language"
                        value="Economic"
                        onChange={() => setCategory(item)}
                      />
                      <label htmlFor="javascript"> {item}</label>
                    </div>
                  ))}
                </div>

                <input
                  type="text"
                  onChange={(evt) => {
                    setAllCat((t) => [...t, evt.target.value]);
                  }}
                  className=" add-new-category shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  placeholder="Add category"
                ></input>
                <button
                  className=" bg-red-500"
                  onClick={() => {
                    updateCategory();
                  }}
                >
                  add new category
                </button>

                <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
