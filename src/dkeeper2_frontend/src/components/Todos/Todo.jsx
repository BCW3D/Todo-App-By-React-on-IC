import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaRegTrashCan } from "react-icons/fa6";

function Todo(props) {
  const { title, desc } = props.todo;
  const id = props.id;

  console.log(id);

  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };
  return (
    <Card
      style={{
        width: "18rem",
        textAlign: "center",
        marginRight: "5px",
        marginBottom: "5px",
      }}
    >
      <Card.Body>
        <Card.Title>
          <h3>{title}</h3>
        </Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="danger" onClick={() => handleClick(id)}>
          <FaRegTrashCan />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Todo;
