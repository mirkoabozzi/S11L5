import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Tracks from "./Tracks";

const MainHome = () => {
  const hipHop = useSelector((state) => state.mainHomeReducers.hipHop);
  const popCulture = useSelector((state) => state.mainHomeReducers.popCulture);
  const rockClassic = useSelector((state) => state.mainHomeReducers.rockClassic);
  return (
    <main className="col-12 col-md-9 offset-md-2 mainPage">
      <Row>
        <Col xs="9" lg="11" className="mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        <Col xs="10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              <Tracks songs={rockClassic} />
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              <Tracks songs={popCulture} />
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              <Tracks songs={hipHop} />
            </Row>
          </div>
        </Col>
      </Row>
    </main>
  );
};
export default MainHome;
