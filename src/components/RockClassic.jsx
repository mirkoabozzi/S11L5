import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs, ROCK_CLASSIC, SONG } from "../redux/actions";
import { Col, Image } from "react-bootstrap";

const RockClassic = () => {
  const rockClassic = useSelector((state) => state.mainHomeReducers.rockClassic);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs(ROCK_CLASSIC, "queen"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return rockClassic.slice(0, 4).map((song) => {
    return (
      <Col key={song.id} className="text-center">
        <Image
          className="img-fluid"
          src={song.album.cover_medium}
          alt="track"
          onClick={() => {
            dispatch({ type: SONG, payload: song });
          }}
        />
        <p>
          Track: {song.title}
          <br />
          Artist: {song.artist.name}
        </p>
      </Col>
    );
  });
};
export default RockClassic;
