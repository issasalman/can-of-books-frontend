import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UpdateBookModal from "./UpdateBookModal";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
    };
  }


  addNewEmail = (e) => {
    e.preventDefault();

    let Email
    Email = e.target.email.value;
     
console.log(Email)
      this.setState({
        email: Email,
       
      });
    }
  
  render() {
    return (
      <>
    
      <Modal
        show={this.props.showFormModal}
        onHide={this.props.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new USer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.addNewEmail}  >
         
            <Form.Group className="mb-3">
              <Form.Label>Please enter your Email</Form.Label>
              <Form.Control type="text" name="email" placeholder="Email" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.props.handleClose} >
              Add new user
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      </>
    );
  }
}

export default LoginForm;
