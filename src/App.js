import React from "react";
import "./App.css";

import Footer from "./Footer";

import Search from "./Search";

export default function App() {
  return (
    <div>
      <div className="container mainWrapper">
        <Search />
      </div>

      <div className="container">
        <Footer />
      </div>
    </div>
  );
}
