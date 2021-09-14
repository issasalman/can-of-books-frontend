import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export class AddBook extends Component {

  render() {
    return (
      <Modal show={this.props.showAddModal} onHide={this.props.handelDisplayAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.handelAddModal}>
            <Form.Group className="mb-3">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter Book Title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter Cat Description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Book Status</Form.Label>
              <Form.Control
                type="text"
                name="status"
                placeholder="Status"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Book description</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Enter Email"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add New Book
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default AddBook;
