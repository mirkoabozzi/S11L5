import { FAVOURITES, HIP_HOP, IS_SELECTED, POP_CULTURE, REMOVE_FAVOURITES, ROCK_CLASSIC, SONG, USER_INPUT } from "../actions";

const intialState = {
  rockClassic: [],
  popCulture: [],
  hipHop: [],
  song: null,
  favourites: [],
  isSelected: false,
  userInput: "queen",
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

    case IS_SELECTED:
      return {
        ...state,
        isSelected: action.payload,
      };
    case FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case REMOVE_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter((song) => song.id !== action.payload.id),
      };

    case USER_INPUT:
      return {
        ...state,
        userInput: action.payload,
      };

    default:
      return state;
  }
};

export default MainHomeReducers;
