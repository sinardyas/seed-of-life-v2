import { REQUEST_DEVOTIONAL_LIST, REQUEST_DEVOTIONAL_LIST_SUCCESS, REQUEST_DEVOTIONAL_LIST_FAILED } from '../utils/constant';

const initialState = {
  data: {},
  message: '',
  loading: false,
  error: '',
  actionStatus: ''
};

const devotionalReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DEVOTIONAL_LIST: 
      return {
        ...state,
        loading: true,
        actionStatus: REQUEST_DEVOTIONAL_LIST
      }
    case REQUEST_DEVOTIONAL_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        actionStatus: REQUEST_DEVOTIONAL_LIST_SUCCESS,
        data: action.payload
      }
    case REQUEST_DEVOTIONAL_LIST_FAILED:
      return {
        ...state,
        loading: false,
        actionStatus: REQUEST_DEVOTIONAL_LIST_FAILED,
        error: action.error
      }
    default:
      return state;
  }
};

export { devotionalReducer };