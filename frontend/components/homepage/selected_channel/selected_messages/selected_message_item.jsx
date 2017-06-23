import React from 'react';

const SelectedMessageItem = (message) => {
  // 
  return(
    <li>
      {message.message.content}
    </li>
  );
};

export default SelectedMessageItem;
