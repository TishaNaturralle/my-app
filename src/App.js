import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Plettenberg Bay" />
        <footer>
          This project was coded by {""}
          <a
            href="https://www.tmaenga.za"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ticha Maenga
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/TishaNaturralle/my-app"
            target="_blank"
            rel="noopener noreferrer "
          >
            open-sourced on GitHub
          </a>{" "}
          and{""}
          <a
            href="https://app.netlify.com/sites/dreamy-madeleine-da9f46.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Hosted by Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
