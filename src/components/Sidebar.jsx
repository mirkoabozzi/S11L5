import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { USER_INPUT } from "../redux/actions";
const Sidebar = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  return (
    <aside className="col col-2">
      <Navbar className=" navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav>
              <ul>
                <li>
                  <Nav.Link className="nav-item d-flex align-items-center" href="#">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="nav-item d-flex align-items-center" href="#">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </Nav.Link>
                </li>
                <li>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      dispatch({ type: USER_INPUT, payload: inputValue });
                    }}
                  >
                    <Form.Group className="mt-3">
                      <Form.Control type="text" className="form-control" placeholder="Search" aria-label="Search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                      <div className="input-group-append">
                        <Button type="submit" className="bg-transparent btn-secondary btn-sm h-100 mt-2">
                          GO
                        </Button>
                      </div>
                    </Form.Group>
                  </Form>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button className="btn signUp-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
        </div>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
