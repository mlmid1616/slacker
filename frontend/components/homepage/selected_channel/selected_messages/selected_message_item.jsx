import React from 'react';
import moment from 'moment';



const SelectedMessageItem = ({ message }) => {

  const date = moment().format('MM/DD');

  let replyOffer;

  if (message.count > 0) {
    replyOffer =
    <div className="replies-box">
        <img className="small-reply-avatar" src={message.replies[0].avatar} />
        Replies:{message.count}
    </div>
  } else {
    replyOffer =
    <div className="reply-box">
      <div className="">Reply</div>
    </div>
  };






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


              {replyOffer}


        </div>
    </li>
  );
};


// class SelectedMessageItem extends React.Component = {
//   constructor(props) {
//     super(props);
//   }
//   const date = moment().format('MM/DD');
//   const message = this.props.message
//
//
//   render () {
//     const date = moment().format('MM/DD');
//     const message = this.props.message
//     return(
//       <li className="selected-message-item">
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
//       </li>
//     );
//   }
//
// };


export default SelectedMessageItem;
