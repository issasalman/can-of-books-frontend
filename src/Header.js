import React from 'react';
import { Navbar } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import './Header.css';
import NavLink from 'react-bootstrap/NavLink';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

// import Login from "./Login";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <NavLink href="/">Home</NavLink>
          <NavLink href="/profile">Profile</NavLink>
          <Navbar.Brand href="#home"  style={{color: "red" , paddingLeft: "37%"} }> 📚  Books List 📚</Navbar.Brand>
          <LoginButton  />
          <LogoutButton  />
          {/* <Login/> */}
      </Navbar>
    )
  }
}

export default Header;
