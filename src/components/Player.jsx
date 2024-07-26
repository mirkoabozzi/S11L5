import { Col, Container, Image, Row } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { useDispatch, useSelector } from "react-redux";
import { FAVOURITES, REMOVE_FAVOURITES } from "../redux/actions";

const Player = () => {
  const song = useSelector((state) => state.mainHomeReducers.song);
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.mainHomeReducers.favourites);

  const handleFavourite = (song) => {
    if (favourites.includes(song)) {
      dispatch({ type: REMOVE_FAVOURITES, payload: song });
    } else {
      dispatch({ type: FAVOURITES, payload: song });
    }
  };
  //console.log("favourites", favourites);
  //console.log("song", song);

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
            <Col xs="1" onClick={() => handleFavourite(song)}>
              {favourites.includes(song) ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
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
