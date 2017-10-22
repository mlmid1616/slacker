import React from 'react';
import moment from 'moment';



const SelectedMessageItem = (props) => {

  const date = moment().format('MM/DD');
  let message = props.message
  let replyOffer;

  if (message.count == 1) {
    replyOffer =
    <div className="replies-box">
        <img className="small-reply-avatar" src={message.replies[0].avatar} />
        &nbsp;<span className="replies-label">{message.count} Replies</span>
    </div>
  } else if (message.count >= 2) {
    replyOffer =
    <div className="replies-box">
        <img className="small-reply-avatar" src={message.replies[0].avatar} /> 
        <img className="small-reply-avatar" src={message.replies[1].avatar} />
        &nbsp;<span className="replies-label">{message.count} Replies</span>
    </div>
  } else {
    replyOffer =
    <div className="reply-box">
      <div className="reply-label">Reply</div>
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




// i need a HOC bc I need props. Then, I can change the message from there
// i need to get the replies of this message to the replies component
// then i need

/*
1.) make the HOC select message itme work
2.) in props
3.)
*/


// class SelectedMessageItem extends React.Component = {
//   constructor(props) {
//     super(props);
//   }
//   const date = moment().format('MM/DD');
//   let message = this.props.message;
//   render () {
//     const date = moment().format('MM/DD');
//     let message = props.message
//     let replyOffer;
//
//     if (message.count > 0) {
//       replyOffer =
//       <div className="replies-box">
//           <img className="small-reply-avatar" src={message.replies[0].avatar} />
//           Replies:{message.count}
//       </div>
//     } else {
//       replyOffer =
//       <div className="reply-box">
//         <div className="">Reply</div>
//       </div>
//     };
//
//     const date = moment().format('MM/DD');
//     const message = this.props.message
//     return(
//       <li className="selected-message-item">
//           <img className="authorPic" src={message.authorPic} />
//           <div className="selected-message-item-div">
//
//             <div className="message-author-name">
//               <div>{message.authorName}</div>
//               <div className="time-stamp">{date}</div>
//             </div>
//
//             <br />
//
//             <div className="message-content">
//               {message.content}
//             </div>
//
//             {replyOffer}
//
//           </div>
//       </li>
//       <div>
//         hi
//       </div>
//     );
//   }
//
// };


export default SelectedMessageItem;
