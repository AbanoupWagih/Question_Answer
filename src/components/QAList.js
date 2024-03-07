import React from "react";
import { Accordion, Button, Row } from "react-bootstrap";
import { question } from "../data";

const QAList = ({ data, deleteOneItem }) => {

    const dataLocal= JSON.parse(localStorage.getItem("items"));

    const onDeleteItem = (id) => {
        if(localStorage.getItem("items") != null) {

            question.splice(question.findIndex((item)=> item.id === id), 1);
            deleteOneItem(question);
        }
    }
  return (
    <Row>
      <Accordion>
        {localStorage.getItem("items") != null ? (dataLocal.map((item, index)=> {
            return(<Accordion.Item key={index} eventKey={item.id}>
            <Accordion.Header>{item.q}</Accordion.Header>
            <Accordion.Body className="d-flex justify-content-between">
              {item.a}
              <Button onClick={() => onDeleteItem(item.id)} className="btn btn-warning">Delete Question</Button>
            </Accordion.Body>
          </Accordion.Item>)
        })) : <h2 className="text-center p-5">There are no questions now</h2>}
        
      </Accordion>
    </Row>
  );
};

export default QAList;
