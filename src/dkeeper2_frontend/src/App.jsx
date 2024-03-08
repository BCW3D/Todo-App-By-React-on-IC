import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import style from "./main.module.css";

import Header from "./components/Header/Header";
import Home from "./components/Todos/Home";
import AddTodo from "./components/Todos/AddTodo";

function App() {
  return (
    <main className={style.container}>
      <Header />
      <Home />
    </main>
  );
}

export default App;
