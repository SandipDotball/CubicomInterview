import { LOGIN__USER, LOGOUT__USER } from '../constants/actionTypes';
import axios from 'axios';
import { showMessages } from './messageAction';
import { LOGIN__API } from '../constants/API';
import { axiosHeader } from '../constants/axiosHeader';

export const loginAction = (value, history) => async dispatch => {
  try {
    const response = await axios.post(LOGIN__API, value, {
      headers: axiosHeader
    });
    if (!response.data.access_token) {
      dispatch(showMessages('error', response.data));
    } else {
      dispatch({
        type: LOGIN__USER,
        payload: response.data.access_token
      });

      if (value.remember) {
        localStorage.setItem('accesstoken', response.data.access_token);
      } else {
        sessionStorage.setItem('accesstoken', response.data.access_token);
      }

      axios.defaults.headers.common['x-access-token'] =
        response.data.access_token;
      dispatch(showMessages('success', 'Successfully Login'));
      history.push('/');
    }
  } catch (error) {
    dispatch(showMessages('error', error.message));
  }
};

export const logoutAction = () => {
  localStorage.removeItem('accesstoken');
  sessionStorage.removeItem('accesstoken');
  return {
    type: LOGOUT__USER
  };
};
