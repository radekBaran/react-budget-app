import React, { useRef } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useBudgets } from "../contexts/BudgetsContext";

function AddBudgetModal({ show, handleClose }) {
  const nameRef = useRef();
  const maxRef = useRef();
  const { addBudget } = useBudgets();
  function handleSubmit(e) {
    e.preventDefault();
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    });
    handleClose();
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Nowy budżet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nazwa</Form.Label>
            <Form.Control ref={nameRef} type="text" required></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="max">
            <Form.Label>Maksymalny wydatek</Form.Label>
            <Form.Control
              ref={maxRef}
              type="number"
              required
              min={0}
              step={0.01}
            ></Form.Control>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Dodaj
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}

export default AddBudgetModal;
