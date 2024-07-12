import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs, POP_CULTURE } from "../redux/actions";

const PopCulture = () => {
  const popCulture = useSelector((state) => state.mainHomeReducers.popCulture);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs(POP_CULTURE, "katyperry"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return popCulture.slice(0, 4).map((song) => {
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
export default PopCulture;
