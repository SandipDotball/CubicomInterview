import { SHOW__MESSAGES, HIDE__MESSAGES } from '../constants/actionTypes';

export const showMessages = (typeMessage, textMessage) => ({
  type: SHOW__MESSAGES,
  payload: { status: typeMessage, message: textMessage }
});

export const hideMessages = () => ({
  type: HIDE__MESSAGES
});
