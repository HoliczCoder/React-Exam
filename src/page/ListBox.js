import React from "react";
import { useNavigate } from "react-router-dom";

export default function ListBox() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col min-h-screen max-w-sm mx-auto">
        <header
          className="flex flex-wrap pt-3 text-white mb-1"
          style={{ backgroundColor: "#128C7E" }}
        >
          <div className="flex justify-between text-xl w-full font-medium pl-4">
            WhatsApp
            <div className="flex items-center">
              <svg
                className="h-4 mr-6 text-base"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                />
              </svg>
              <svg
                className="h-4 mr-4 text-base"
                style={{}}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
              >
                <path
                  fill="currentColor"
                  d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
                />
              </svg>
            </div>
          </div>
          <div className="flex w-full items-center mt-4">
            <div className="pl-3 w-full">
              <svg
                className="h-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"
                />
              </svg>
            </div>
            <button className="opacity-100 border-b-2 border-white tracking-wide text-sm uppercase font-medium text-center py-2 px-8 focus:outline-none">
              chats
            </button>
            <button className="opacity-50 tracking-wide text-sm uppercase font-medium text-center py-2 px-8 focus:outline-none">
              status
            </button>
            <button className="opacity-50 tracking-wide text-sm uppercase font-medium text-center py-2 px-8 focus:outline-none">
              calls
            </button>
          </div>
        </header>
        <button onClick={() => navigate("/chatbox")}>
          <div className="px-3 pt-1 mt-1 flex">
            <img
              src="https://s3.amazonaws.com/uifaces/faces/twitter/hafeeskhan/128.jpg"
              className=" w-12 h-12 rounded-full"
              alt="dp"
            />
            <div className="flex flex-wrap ml-4 pb-4 w-full">
              <div className="inline-flex justify-between w-full font-bold">
                Hieu
                <span className="inline-flex items-center font-normal text-gray-400 text-xs">
                  yesterday
                </span>
              </div>
              <div className="inline-flex w-full text-sm text-gray-500">
                lorem ipsum
              </div>
            </div>
          </div>
        </button>
        <button onClick={() => navigate("/chatbox")}>
          <div className="px-3 pt-1 mt-1 flex">
            <img
              src="https://s3.amazonaws.com/uifaces/faces/twitter/billyroshan/128.jpg"
              className=" w-12 h-12 rounded-full"
              alt="dp"
            />

            <div className="flex flex-wrap ml-4 pb-4 w-full">
              <div className="inline-flex justify-between w-full font-bold">
                Duy
                <span className="inline-flex items-center font-normal text-gray-400 text-xs">
                  yesterday
                </span>
              </div>
              <div className="inline-flex w-full text-sm text-gray-500">
                lorem ipsum
              </div>
            </div>
          </div>
        </button>
        <button onClick={() => navigate("/chatbox")}>
          <div className="px-3 pt-1 mt-1 flex">
            <img
              src="https://s3.amazonaws.com/uifaces/faces/twitter/kudretkeskin/128.jpg"
              className=" w-12 h-12 rounded-full"
              alt="dp"
            />
            <div className="flex flex-wrap ml-4 pb-4 w-full">
              <div className="inline-flex justify-between w-full font-bold">
                Tien
                <span className="inline-flex items-center font-normal text-gray-400 text-xs">
                  yesterday
                </span>
              </div>
              <div className="inline-flex w-full text-sm text-gray-500">
                lorem ipsum
              </div>
            </div>
          </div>
        </button>
        <button onClick={() => navigate("/chatbox")}>
          <div className="px-3 pt-1 mt-1 flex">
            <img
              src="https://s3.amazonaws.com/uifaces/faces/twitter/d33pthought/128.jpg"
              className=" w-12 h-12 rounded-full"
              alt="dp"
            />
            <div className="flex flex-wrap ml-4 pb-4 w-full">
              <div className="inline-flex justify-between w-full font-bold">
                Minh
                <span className="inline-flex items-center font-normal text-gray-400 text-xs">
                  yesterday
                </span>
              </div>
              <div className="inline-flex w-full text-sm text-gray-500">
                lorem ipsum
              </div>
            </div>
          </div>
        </button>

        <div className="text-center text-xs text-gray-600 mt-4">Archived</div>
      </div>
    </div>
  );
}
