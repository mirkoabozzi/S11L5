import { HIP_HOP, POP_CULTURE, ROCK_CLASSIC, SELECT_SONG, SONG } from "../actions";

const intialState = {
  rockClassic: [],
  popCulture: [],
  hipHop: [],
  isSelected: false,
  song: [],
};

const MainHomeReducers = (state = intialState, action) => {
  switch (action.type) {
    case ROCK_CLASSIC:
      return {
        ...state,
        rockClassic: action.payload,
      };
    case POP_CULTURE:
      return {
        ...state,
        popCulture: action.payload,
      };
    case HIP_HOP:
      return {
        ...state,
        hipHop: action.payload,
      };
    case SONG:
      return {
        ...state,
        song: action.payload,
      };
    // case SELECT_SONG:
    //   return {
    //     ...state,
    //     isSelected: true,
    //   };

    default:
      return state;
  }
};

export default MainHomeReducers;
