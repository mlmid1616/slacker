import React from 'react';


const SelectedMessageItem = ({ message }) => {

  

  return(
    <li className="selected-message-item">
        <img className="authorPic" src={message.authorPic} />
        <div className="selected-message-item-div">
          <div className="message-author-name">
            {message.authorName}
          </div>
          <br />
          <div className="message-content">
            {message.content}
          </div>
      </div>
    </li>
  );
};
// <img src={message.authorPic} />

// <Timestamp />
export default SelectedMessageItem;
