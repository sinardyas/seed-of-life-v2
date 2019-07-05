import axios from '../utils/axios';
import { dashboardApi } from '../utils/api';
import { REQUEST_DASHBOARD, REQUEST_DASHBOARD_SUCCESS, REQUEST_DASHBOARD_FAILED } from '../utils/constant';

const verseBuilder = (verse = []) => {
  let verseBodyBuilder = '';
  let verseNumberBuilder = '';

  verse.forEach((verse, idx, array) => {
    let number = idx + 1;
    verseBodyBuilder += array.length > 1 ? `${number}. ${verse.verseBody}\n\n` : `${verse.verseBody}`;
    verseNumberBuilder += array.length > 1 ? (`${number}. ${verse.verseNumber}${idx === array.length - 1 ? ' ' : ', '}`)
                                           : `${verse.verseNumber}`;
  });

  return {
    body: verseBodyBuilder,
    number: verseNumberBuilder
  }
};

export const getTodaySeed = ({ dispatch }) => {
  dispatch({ type: REQUEST_DASHBOARD });
  axios
    .get(dashboardApi)
    .then(async (response) => {
      const { status, success, message, data } = response.data;

      const payload = {
        title: data.title,
        body: data.body,
        verse: verseBuilder(data.verse),
        author: data.author,
        publishDate: data.publishDate,
        status: data.status
      };

      dispatch({ type: REQUEST_DASHBOARD_SUCCESS, payload });
    })
    .catch((error) => {
      dispatch({ type: REQUEST_DASHBOARD_FAILED, error: error.message });
    });
}
