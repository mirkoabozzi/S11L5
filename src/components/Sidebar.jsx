import { Button, Container, Form } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { USER_INPUT } from "../redux/actions";
const Sidebar = () => {
  const [inputValue, setInputvalue] = useState("");
  const dispatch = useDispatch();

  return (
    <aside className="col col-2">
      <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <Container className="flex-column align-items-start">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </a>
                </li>
                <li>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      dispatch({ type: USER_INPUT, payload: inputValue });
                    }}
                  >
                    <Form.Group className="mt-3">
                      <Form.Control type="text" className="form-control" placeholder="Search" aria-label="Search" value={inputValue} onChange={(e) => setInputvalue(e.target.value)} />
                      <div className="input-group-append">
                        <Button type="submit" className="btn-secondary btn-sm h-100">
                          GO
                        </Button>
                      </div>
                    </Form.Group>
                  </Form>

                  {/* <div className="input-group mt-3">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary btn-sm h-100">GO</button>
                    </div>
                  </div> */}
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
