import React from 'react';

const SelectedMessageItem = ({ message }) => {
  
  return(
    <li className="selected-message-item">
      <div className="selected-message-item-div">
        <img className="authorPic" src={message.authorPic} />
        {message.authorName}
        <br />
        {message.content}
      </div>
    </li>
  );
};
// <img src={message.authorPic} />

export default SelectedMessageItem;
