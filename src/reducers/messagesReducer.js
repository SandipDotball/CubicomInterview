import { SHOW__MESSAGES, HIDE__MESSAGES } from '../constants/actionTypes';

const initialState = {
  status: '',
  messageText: ''
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW__MESSAGES:
      return {
        ...state,
        status: action.payload.status,
        messageText: action.payload.message
      };
    case HIDE__MESSAGES:
      return { ...state, status: '', messageText: '' };
    default:
      return state;
  }
};

export default messagesReducer;
