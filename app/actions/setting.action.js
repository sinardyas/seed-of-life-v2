import { SET_FONT_SIZE } from '../utils/constant';

export const setFontSize = ({ dispatch, size }) => dispatch({ type: SET_FONT_SIZE, fontSize: size });