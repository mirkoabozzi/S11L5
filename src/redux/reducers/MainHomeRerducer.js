import { HIP_HOP, POP_CULTURE, ROCK_CLASSIC } from "../actions";

const intialState = {
  rockClassic: [],
  popCulture: [],
  hipHop: [],
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

    default:
      return state;
  }
};

export default MainHomeReducers;
