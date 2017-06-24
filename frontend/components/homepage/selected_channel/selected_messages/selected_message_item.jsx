import React from 'react';

const SelectedMessageItem = (message) => {
  //
  return(
    <li className="selected-message-item">
      {message.message.content}
    </li>
  );
};

export default SelectedMessageItem;
