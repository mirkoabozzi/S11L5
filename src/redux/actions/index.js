export const ROCK_CLASSIC = "ROCK_CLASSIC";
export const POP_CULTURE = "POP_CULTURE";
export const HIP_HOP = "HIP_HOP";
export const FAVOURITES = "FAVOURITES";
export const SONG = "SONG";
export const IS_SELECTED = "IS_SELECTED";
export const USER_INPUT = "USER_INPUT";

export const getSongs = (type, artistName) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (resp.ok) {
        let { data } = await resp.json();
        // console.log("data", data);

        dispatch({ type: type, payload: data });
      } else {
        throw new Error("Errore nel recupero dei brani");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
