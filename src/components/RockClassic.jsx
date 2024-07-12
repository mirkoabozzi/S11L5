import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs, ROCK_CLASSIC } from "../redux/actions";

const RockClassic = () => {
  const rockClassic = useSelector((state) => state.mainHomeReducers.rockClassic);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs(ROCK_CLASSIC, "queen"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return rockClassic.slice(0, 4).map((song) => {
    return (
      <div key={song.id} className="col text-center">
        <img className="img-fluid" src={song.album.cover_medium} alt="track" />
        <p>
          Track: {song.title}
          <br />
          Artist: {song.artist.name}
        </p>
      </div>
    );
  });
};
export default RockClassic;
