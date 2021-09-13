import React from "react";
import Navbar from "react-bootstrap/Navbar";

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand style={{color: "black" , paddingLeft: "43%"} }>🥰 Issa Salman && Omar Taha 🥰</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
