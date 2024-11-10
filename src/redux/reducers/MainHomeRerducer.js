import { FAVORITES, HIP_HOP, IS_SELECTED, POP_CULTURE, REMOVE_FAVORITES, ROCK_CLASSIC, SONG, USER_INPUT } from "../actions";

const initialState = {
  rockClassic: [],
  popCulture: [],
  hipHop: [],
  song: null,
  favorites: [],
  isSelected: false,
  userInput: "queen",
};

const MainHomeReducers = (state = initialState, action) => {
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
    case FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((song) => song.id !== action.payload.id),
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
