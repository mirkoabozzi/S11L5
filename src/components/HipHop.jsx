import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs, HIP_HOP } from "../redux/actions";

const HipHop = () => {
  const hipHop = useSelector((state) => state.mainHomeReducers.hipHop);
  const dispatch = useDispatch();

  console.log("hip", hipHop);

  useEffect(() => {
    dispatch(getSongs(HIP_HOP, "eminem"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return hipHop.slice(0, 4).map((song) => {
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
export default HipHop;
