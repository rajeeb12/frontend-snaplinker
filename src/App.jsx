import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Generator from "./components/Generator";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Content />} />{" "}
          <Route path="/generator" element={<Generator />} />
        </Route>
      </Routes>
  );
}

export default App;
