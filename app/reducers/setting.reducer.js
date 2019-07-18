import { SET_FONT_SIZE, SET_FONT_FAMILY } from '../utils/constant';

const initialState = {
  fontSize: 15,
  fontFamily: 'Roboto-Regular'
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FONT_SIZE: 
      return {
        ...state,
        fontSize: action.fontSize
      }
    case SET_FONT_FAMILY: 
      return {
        ...state,
        fontFamily: action.fontFamily
      }
    default:
      return state;
  }
};

export { settingReducer };
