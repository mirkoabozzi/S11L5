import { Col, Container, Image, Row } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";

const Player = () => {
  const song = useSelector((state) => state.mainHomeReducers.song);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg="10" className="offset-lg-2">
          <Row className="h-100 offset-md-1 ">
            <Col xs="4">
              {song && (
                <Row>
                  <Col xs="12" md="4">
                    <Image className="img-fluid mt-2" width="70" src={song.album.cover_medium} alt="track" />
                  </Col>
                  <Col xs="8">
                    <p className="text-white">{song.title}</p>
                    <p className="text-white">{song.artist.name}</p>
                  </Col>
                </Row>
              )}
            </Col>
            <Col xs="8" md="4" className="playerControls">
              <div className="d-flex">
                <a href="#">
                  <Image src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <Image src={prev} alt="prev" />
                </a>
                <a href="#">
                  <Image src={play} alt="play" />
                </a>
                <a href="#">
                  <Image src={next} alt="next" />
                </a>
                <a href="#">
                  <Image src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Player;
