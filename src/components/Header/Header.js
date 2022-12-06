import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const Header = () => {
  const [dark, setDark] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Learning Site</Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-end">
              <Nav.Link className="text-white">
                <Link to="/courses">Courses</Link>
              </Nav.Link>
              <Nav.Link className="text-white">
                <Link to="/faq">FAQ</Link>
              </Nav.Link>
              <Nav.Link className="text-white">
                <Link to="/blog">Blob</Link>
              </Nav.Link>
              {/* <Link to="/blog">Blog</Link> */}

              {dark ? (
                <Nav.Link onClick={() => setDark(false)} className="text-white">
                  dark
                </Nav.Link>
              ) : (
                <Nav.Link onClick={() => setDark(true)} className="text-white">
                  light
                </Nav.Link>
              )}
              {user?.uid ? (
                <button onClick={logOut}>Log Out</button>
              ) : (
                <>
                  <button className="btn btn-light me-3">
                    <Link to="/login">Login</Link>
                  </button>
                  <button className="btn btn-light">
                    <Link to="/signup">Sign Up</Link>
                  </button>
                </>
              )}
              <span className="text-white">{user?.email}</span>
              {user?.photoURL && (
                <img
                  style={{ width: "40px" }}
                  title={user.displayName}
                  src={user?.photoURL}
                  alt=""
                />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
