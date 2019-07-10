import axios from '../utils/axios';
import { devotionalListApi } from '../utils/api';
import {
  REQUEST_DEVOTIONAL_LIST,
  REQUEST_DEVOTIONAL_LIST_SUCCESS,
  REQUEST_DEVOTIONAL_LIST_FAILED
} from '../utils/constant';

const getDevotionalList = ({ dispatch }) => {
  dispatch({ type: REQUEST_DEVOTIONAL_LIST });
  axios
    .get(devotionalListApi)
    .then(async (response) => {
      const { status, success, message, data } = response.data;

      const payload = {
        docs: data
      }

      dispatch({ type: REQUEST_DEVOTIONAL_LIST_SUCCESS, payload });
    })
    .catch((e) => {
    dispatch({ type: REQUEST_DEVOTIONAL_LIST_FAILED, error: error.message });
  });
}

export { getDevotionalList };