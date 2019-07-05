import { REQUEST_REFLECTION_LIST, REQUEST_REFLECTION_LIST_SUCCESS, REQUEST_REFLECTION_LIST_FAILED } from '../utils/constant';

const initialState = {
  data: {},
  message: '',
  loading: false,
  error: '',
  actionStatus: ''
};

const reflectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_REFLECTION_LIST: 
      return {
        ...state,
        loading: true,
        actionStatus: REQUEST_REFLECTION_LIST
      }
    case REQUEST_REFLECTION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        actionStatus: REQUEST_REFLECTION_LIST_SUCCESS,
        data: action.payload
      }
    case REQUEST_REFLECTION_LIST_FAILED:
      return {
        ...state,
        loading: false,
        actionStatus: REQUEST_REFLECTION_LIST_FAILED,
        error: action.error
      }
    default:
      return state;
  }
};

export { reflectionReducer };