import React from "react";
import { Navbar ,NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import NavLink from "react-bootstrap/NavLink";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { withAuth0 } from "@auth0/auth0-react";

class Header extends React.Component {
  render() {
    console.log(this.props.auth0.isAuthenticated);
    const isAuth = this.props.auth0.isAuthenticated;
    console.log(this.props.auth0.user);
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <NavItem>  <Link to="/">Home</Link>   </NavItem>
        {isAuth && <NavItem style={{  paddingLeft: "1%" }} >  <Link to="/profile">Profile  </Link></NavItem>}

        <Navbar.Brand href="#home" style={{ color: "red", paddingLeft: "37%" }}>
          {" "}
          📚 Books List 📚
        </Navbar.Brand>
        {isAuth ? <LogoutButton /> : <LoginButton />}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
