import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by {""}
          <a href="https://www.tmaenga.za" target="_blank">
            Ticha Maenga{""}
          </a>
          and is {""}
          <a href="https://github.com/TishaNaturralle/my-app" target="_blank">
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
