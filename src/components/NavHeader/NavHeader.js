import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./NavHeader.css";
import logo from "../../images/logo1.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../App";
import { Avatar } from "@material-ui/core";

const NavHeader = () => {
  const [loggedInuser, setLoggedInUser] = useContext(userContext);
  const handleLogOut = () => {
    setLoggedInUser({});
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navBar">
        <Container>
          <Navbar.Brand>
            <Link to="/home">
              <img src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-item" to="/home">
                Home
              </Link>
              <Link className="nav-item" to="/ticketprice">
                Ticket Price
              </Link>
              <Link className="nav-item" to="/buyticket">
                Buy Ticket
              </Link>
              <Link className="nav-item" to="/career">
                Career
              </Link>
              <Link className="nav-item" to="/profile">
                Profile
              </Link>
              {loggedInuser.success ? (
                <Link onClick={handleLogOut} to="/" className="nav-item">
                  Log Out
                </Link>
              ) : (
                <Link className="nav-item" to="/login">
                  Log In
                </Link>
              )}
              {/* <p>Name: {loggedInuser.name}</p> */}
              <Avatar className="user-avatar" src={loggedInuser.photo}>
                U
              </Avatar>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavHeader;
