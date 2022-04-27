import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";

import ChatBox from "../src/page/ChatBox.js";
import ListBox from "./page/ListBox";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/chatbox" element={<ChatBox />}></Route>
          <Route path="/listbox" element={<ListBox />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
