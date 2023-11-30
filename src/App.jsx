import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={SearchPage} path="/search" />
      </Routes>
    </>
  );
};

export default App;
