import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { dkeeper2_backend } from "declarations/dkeeper2_backend";
import style from "./addtodo.module.css";

function Home() {
  const [todos, setTodos] = useState([]);

  const onRemoveTodo = (id) => {
    dkeeper2_backend.removeNote(id);
    setTodos((prevTodo) => {
      return prevTodo.filter((todo, index) => {
        return index !== id;
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const todos = await dkeeper2_backend.readNotes();
    setTodos(todos);
  };

  const onAddTodo = (newTodo) => {
    setTodos((prevTodo) => {
      return [newTodo, ...prevTodo];
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <AddTodo onAddTodo={onAddTodo} />
          <div className={style.card_holder}>
            <Todos todos={todos} onRemoveTodo={onRemoveTodo} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
