import { DISPLAY_DROPDOWN, NOT_DISPLAY_DROPDOWN, CHANGE_DROPDOWN_STATE } from "../actions/navbar";


const initialState = {
  dropdownSelect: false,
  dropdownOpen:false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPLAY_DROPDOWN:
      return {
        ...state,
        dropdownSelect: true,
        
      };
      case NOT_DISPLAY_DROPDOWN:
      return {
        ...state,
        dropdownSelect: false,
      };
      case CHANGE_DROPDOWN_STATE:
        return{
          ...state,
          dropdownOpen: !state.dropdownOpen,
        }
    default:
      return state;
  }
};

export default reducer;
