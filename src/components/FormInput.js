import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { question } from "../data";


const FormInput = ({onAdd, notify}) => {
    const [qu, setQu] = useState("");
    const [an, setAn] = useState("");
    const addNewItem = (e) =>{
        if(qu === "" ||  an===""){
            notify("Please fill out all fields!", "Error");
            return;
        }
        question.push({id:Math.random(), q:qu, a: an});
        setQu('')
        setAn('')
        onAdd();
    }
  return (
    <Row className="my-3">
      <Col sm="5">
        <Form.Control value={qu} onChange={(e) => setQu(e.target.value)} type="text" placeholder="Enter Question" />
      </Col>
      <Col sm="5">
        <Form.Control value={an} onChange={(e) => setAn(e.target.value)} type="text" placeholder="Enter Answer" />
      </Col>
      <Col sm="2">
        <Button onClick={addNewItem} className="btn btn-success w-100" type="submit">
          ADD
        </Button>
      </Col>
    </Row>
  );
};

export default FormInput;
