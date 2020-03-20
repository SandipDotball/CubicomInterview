import { LOGIN__USER, LOGOUT__USER } from '../constants/actionTypes';

const initialState = {
  isAuthenticated:
    localStorage.getItem('accesstoken') || sessionStorage.getItem('accesstoken')
      ? true
      : false,
  accesstoken: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN__USER:
      return { ...state, isAuthenticated: true, accesstoken: action.payload };
    case LOGOUT__USER:
      return { ...state, isAuthenticated: false, accesstoken: '' };
    default:
      return state;
  }
};

export default authReducer;
