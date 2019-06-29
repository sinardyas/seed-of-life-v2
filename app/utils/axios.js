import axios from 'axios';

axios.defaults.baseURL = 'https://seed-of-life-v2.herokuapp.com';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.responseType = 'json';
axios.defaults.timeout = 35000;

export default axios;
