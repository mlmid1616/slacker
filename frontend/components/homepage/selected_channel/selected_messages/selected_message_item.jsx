import React from 'react';
import moment from 'moment';



const SelectedMessageItem = ({ message }) => {

  const date = moment().format('MM/DD');




  return(
    <li className="selected-message-item">
        <img className="authorPic" src={message.authorPic} />
        <div className="selected-message-item-div">

          <div className="message-author-name">
            <div>{message.authorName}</div>
            <div className="time-stamp">{date}</div>
          </div>

          <br />

          <div className="message-content">
            {message.content}
          </div>

        </div>
    </li>
  );
};

// class SelectedMessageItem = ({ message }) => {
//
//   let date = moment().format('ddd, hh:mm A');
//
//
//
//   return(
//     <li className="selected-message-item">
//         <img className="authorPic" src={message.authorPic} />
//         <div className="selected-message-item-div">
//
//           <div className="message-author-name">
//             <div>{message.authorName}</div>
//             <div className="time-stamp">{date}</div>
//           </div>
//
//           <br />
//
//           <div className="message-content">
//             {message.content}
//           </div>
//
//         </div>
//     </li>
//   );
// };


export default SelectedMessageItem;
