import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export class UpdateBookModal extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.showUpdateModal}
          onHide={this.props.handelDisplayUpdateModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update a Book</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.props.handelUpdateModal}>
              <Form.Group className="mb-3">
                <Form.Label>title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="Enter Title"
                  defaultValue={this.props.selectedBook.title}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  type="text"
                  placeholder="Enter description"
                  defaultValue={this.props.selectedBook.description}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  name="status"
                  type="text"
                  placeholder="Enter Status"
                  defaultValue={this.props.selectedBook.status}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="text"
                  placeholder="Email"
                  defaultValue={this.props.selectedBook.email}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update Book
              </Button>
              <Button
                variant="secondary"
                onClick={this.props.handelDisplayUpdateModal}
              >
                {" "}
                Close
              </Button>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            📒 📓 📔 📕 📖 📗 📘 📙 📒 📓 📔 📕 📖 📗 📘 📙📕 📖 📗 📖  
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default UpdateBookModal;
