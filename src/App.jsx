import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainHome from "./components/MainHome";
import Sidebar from "./components/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import Player from "./components/Player";

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs="2">
            <Sidebar />
          </Col>
          <Col>
            <MainHome />
          </Col>
        </Row>
        <Player />
      </Container>
    </div>
  );
}

export default App;
