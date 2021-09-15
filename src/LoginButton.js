import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;










// import { Component } from "react";
// import Button from "react-bootstrap/Button";
// import LoginForm from "./LoginForm";

// export default class LoginButton extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showFormModal: false,
//     };
//   }
//   handelDisplayAddModal = () => {
//     this.setState({ showFormModal: true });
//   };
//   handleClose = () => {
//     this.setState({ showFormModal: false });
//   };
//    render() {
//     return (
//       <>
//         <Button
//           onClick={this.handelDisplayAddModal}
//           style={{ color: "red", marginLeft: "30%" }}
//           class="btn btn-light ms-3"
//         >
//           Login
//         </Button>
//         <LoginForm handelDisplayAddModal={this.handelDisplayAddModal} showFormModal={this.state.showFormModal} handleClose={this.handleClose} />
//       </>
//     );
//   }
// }
