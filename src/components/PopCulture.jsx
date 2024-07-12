import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs, POP_CULTURE, SONG } from "../redux/actions";
import { Col, Image } from "react-bootstrap";

const PopCulture = () => {
  const popCulture = useSelector((state) => state.mainHomeReducers.popCulture);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs(POP_CULTURE, "katyperry"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return popCulture.slice(0, 4).map((song) => {
    return (
      <Col key={song.id} className="col text-center">
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
export default PopCulture;
