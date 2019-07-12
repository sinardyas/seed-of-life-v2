import { SET_FONT_SIZE } from '../utils/constant';

const initialState = {
  fontSize: 15
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FONT_SIZE: 
      return {
      ...state,
      fontSize: action.fontSize
    }
    default:
      return state;
  }
};

export { settingReducer };
