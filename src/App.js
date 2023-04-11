import logo from "./logo.svg";
import "./App.css";
import SpinningWheel from "./SpinningWheel";
import React from "react";

function App() {
  const [name, setName] = React.useState("circle");

  const startRotate = () => {
    setName("circle start-rotate");
    setTimeout(() => {
      setName("circle start-rotate stop-rotate");
    }, Math.floor(Math.random() * 10000) + 1);
  };

  return (
    <div className="App">
      <div className="arrow"></div>
      <ul className={name}>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            1
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            2
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            3
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            4
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            5
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            6
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            7
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            8
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            9
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            10
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            11
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            12
          </div>
        </li>
      </ul>
      <button onClick={startRotate} className="spin-button">
        SPIN
      </button>
    </div>
  );
}

export default App;
