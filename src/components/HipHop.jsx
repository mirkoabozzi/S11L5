import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs, HIP_HOP, SELECT_SONG, SONG } from "../redux/actions";
import { Col, Image } from "react-bootstrap";

const HipHop = () => {
  const hipHop = useSelector((state) => state.mainHomeReducers.hipHop);
  // const isSelected = useSelector((state) => state.mainHomeReducers.isSelected);
  const dispatch = useDispatch();

  console.log("hip", hipHop);

  useEffect(() => {
    dispatch(getSongs(HIP_HOP, "eminem"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return hipHop.slice(0, 4).map((song) => {
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
        {/* {isSelected && <span>❤️</span>} */}

        <p>
          Track: {song.title}
          <br />
          Artist: {song.artist.name}
        </p>
      </Col>
    );
  });
};
export default HipHop;
