import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideMessages } from '../../actions/messageAction';

function Messages() {
  const messages = useSelector(state => state.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    if (messages.messageText !== '') {
      setTimeout(() => {
        dispatch(hideMessages());
      }, 2000);
    }
  }, [dispatch, messages.messageText]);

  if (messages.messageText !== '') {
    return (
      <div className='messages__container'>
        <div className={`messages ${messages.status ? messages.status : ''}`}>
          <div>
            <h5>
              {messages.status.charAt(0).toLocaleUpperCase() +
                messages.status.slice(1)}
            </h5>
            {messages.messageText}
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default Messages;
