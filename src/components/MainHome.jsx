import { Row } from "react-bootstrap";
import RockClassic from "./RockClassic";
import PopCulture from "./PopCulture";
import HipHop from "./HipHop";

const MainHome = () => {
  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </Row>
      <Row>
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              <RockClassic />
            </div>
          </div>
        </div>
      </Row>
      <Row>
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              <PopCulture />
            </div>
          </div>
        </div>
      </Row>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              <HipHop />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MainHome;
