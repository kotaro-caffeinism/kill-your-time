import logo from "./img/App-logo.png";
import "./App.css";
import React, { useEffect, useState } from "react";
import {
  getActivity,
  getBuzzword,
  getAdvice,
  getJoke,
} from "./utils/getAPI.js";
import Advice from "./components/Advice";

function App() {
  const [currentText, setText] = useState("");

  console.log(getJoke());
  getAdvice().then((res) => console.log(res.slip.advice));
  getBuzzword().then((res) => console.log(res.phrase));
  getActivity().then((res) => console.log(res.activity));
  return (
    <>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Advice setText={setText} currentText={currentText} />
      </div>
    </>
  );
}

export default App;
