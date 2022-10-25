import React from "react";
import "./App.css";

import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <Search />
      <a
        href="https://github.com/louiseahart/weather-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>
      , by Louise Hart
    </div>
  );
}
