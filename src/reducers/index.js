import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import messagesReducer from './messagesReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  messages: messagesReducer
});
