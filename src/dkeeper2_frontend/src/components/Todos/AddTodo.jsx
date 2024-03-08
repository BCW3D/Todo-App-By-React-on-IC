import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import style from "./addtodo.module.css";
import { v4 as uuidv4 } from "uuid";
import { dkeeper2_backend } from "declarations/dkeeper2_backend";

function AddTodo(props) {
  const [newTodo, setNewTodo] = useState({ title: "", desc: "" });

  const handleChange = (e) => {
    const name = e.target.name;

    setNewTodo((prevTodo) => {
      return { ...prevTodo, id: uuidv4(), [name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dkeeper2_backend.createNote(newTodo.title, newTodo.desc);
    props.onAddTodo(newTodo);
    setNewTodo({ title: "", desc: "" });
  };

  return (
    <Form onSubmit={handleSubmit} className={style.form}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Todo Title</Form.Label>
        <Form.Control
          name="title"
          value={newTodo.title}
          type="text"
          onChange={handleChange}
          placeholder="Add Todo"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="desc"
          type="text"
          value={newTodo.desc}
          onChange={handleChange}
          rows={3}
          placeholder="Description"
        />
      </Form.Group>
      <Button style={{ float: "none" }} type="submit">
        Add Todo
      </Button>
    </Form>
  );
}

export default AddTodo;
