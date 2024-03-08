import React from "react";
import { Card } from "react-bootstrap";
import Todo from "./Todo";

function Todos(props) {
  const todos = props.todos;
  const onRemoveTodo = props.onRemoveTodo;

  return todos.map((todo, index) => {
    return (
      <Todo todo={todo} key={index} id={index} onRemoveTodo={onRemoveTodo} />
    );
  });
}

export default Todos;
