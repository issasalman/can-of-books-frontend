import { Component } from "react";
import Button from "react-bootstrap/Button";
import LoginForm from "./LoginForm";

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormModal: false,
    };
  }
  handelDisplayAddModal = () => {
    this.setState({ showFormModal: true });
  };
  handleClose = () => {
    this.setState({ showFormModal: false });
  };
   render() {
    return (
      <>
        <Button
          onClick={this.handelDisplayAddModal}
          style={{ color: "red", marginLeft: "30%" }}
          class="btn btn-light ms-3"
        >
          Login
        </Button>
        <LoginForm handelDisplayAddModal={this.handelDisplayAddModal} showFormModal={this.state.showFormModal} handleClose={this.handleClose} />
      </>
    );
  }
}
