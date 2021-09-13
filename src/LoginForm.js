import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
class LoginForm extends Component {

  

  render() {
   
    return (
      <Modal show={this.props.showAddModal} onHide={this.props.handelDisplayAddModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add new USer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={this.props.handelAddModal}>
          <Form.Group className="mb-3">
            <Form.Label>Please enter your Username</Form.Label>
            <Form.Control type="text" name="Username" placeholder="Username" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Please enter your Email</Form.Label>
            <Form.Control type="text" name="Email" placeholder="Email" />
          </Form.Group>
       

          <Button variant="primary" type="submit">
            Add new user
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
    );
  }
};

export default LoginForm;
