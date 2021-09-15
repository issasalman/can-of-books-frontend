import React from "react";
import Navbar from "react-bootstrap/Navbar";

class Footer extends React.Component {
  render() {
    return (
      <div style={{textAlign:"center"}  }    >  
      <Navbar style={{color: "black"   ,paddingLeft:"40%" }  } class="text-justify" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand > 🥰 Issa Salman && Omar Taha 🥰</Navbar.Brand>
      </Navbar>
      </div>
    );
  }
}

export default Footer;
