import { Component } from "react";
import Button from "react-bootstrap/Button";
class LogoutButton extends Component {
  render() {
    return (
      <Button
        onClick={this.props.onLogout}
        style={{ color: "red", marginLeft: "1%" }}
        variant="secondary"
      >
        Logout
      </Button>
    );
  }
}

export default LogoutButton;
