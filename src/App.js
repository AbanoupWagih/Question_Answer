import { Button, Col, Container, Row } from "react-bootstrap";
import FormInput from "./components/FormInput";
import QAList from "./components/QAList";
import { question } from "./data";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState(question);

  // To Add new Item
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question]);
    notify("Added successfully", "Success");
  };

  ///////// To Delete All Data Items////////////
  const deleteAll = () => {
    localStorage.removeItem("items");
    question.splice(0, question.length);
    setData([]);
    notify("Deleted All successfully", "Success");
  };

  /////////// To Delete One Item From Array /////////////
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setData([...items]);
    notify("Deleted successfully", "Success");
    if (items.length <= 0) {
      deleteAll();
    }
  };

  ////////// to push notification //////////////
  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };

  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="title text-center">
              Common Questions and Answers
            </div>
          </Col>

          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify} />
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {localStorage.getItem("items") != null ? (
              <Button onClick={deleteAll} className="btn btn-danger my-2 w-100">
                Delete All Question
              </Button>
            ) : null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
