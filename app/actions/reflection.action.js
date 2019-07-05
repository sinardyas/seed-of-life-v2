import axios from '../utils/axios';
import { reflectionListApi } from '../utils/api';
import { REQUEST_REFLECTION_LIST, REQUEST_REFLECTION_LIST_SUCCESS, REQUEST_REFLECTION_LIST_FAILED } from '../utils/constant';

const getReflectionList = ({ dispatch, month }) => {
  dispatch({ type: REQUEST_REFLECTION_LIST });

  axios
    .get(reflectionListApi(month))
    .then(async (response) => {
      const { status, success, message, data } = response.data;

      const payload = {
        docs: data
      }

      dispatch({ type: REQUEST_REFLECTION_LIST_SUCCESS, payload });
    })
    .catch((error) => {
      dispatch({ type: REQUEST_REFLECTION_LIST_FAILED, error: error.message });
    });
};

export { getReflectionList };