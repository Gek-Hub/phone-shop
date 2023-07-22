import React from "react";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
