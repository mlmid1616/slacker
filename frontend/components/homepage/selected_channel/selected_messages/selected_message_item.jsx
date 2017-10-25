import React from 'react';
import moment from 'moment';
import { receiveCurrentMessage } from '../../../../actions/current_message_actions';
import { connect } from 'react-redux';


// const SelectedMessageItem = (props) => {
//
//   const date = moment().format('MM/DD');
//   let message = props.message
//   let replyOffer;
//
//   if (message.count == 1) {
//     replyOffer =
//     <div className="replies-box">
//         <img className="small-reply-avatar" src={message.replies[0].avatar} />
//         &nbsp;<span className="replies-label">{message.count} Replies</span>
//     </div>
//   } else if (message.count >= 2) {
//     replyOffer =
//     <div className="replies-box">
//         <img className="small-reply-avatar" src={message.replies[0].avatar} />
//         <img className="small-reply-avatar" src={message.replies[1].avatar} />
//         &nbsp;<span className="replies-label">{message.count} Replies</span>
//     </div>
//   } else {
//     replyOffer =
//     <div className="reply-box">
//       <div className="reply-label">Reply</div>
//     </div>
//   };
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
//           {replyOffer}
//
//         </div>
//     </li>
//   );
// };


/*
1.) make the HOC select message itme work
2.) in props
3.)
*/


class SelectedMessageItem extends React.Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(message) {
    this.props.receiveCurrentMessage(message);
  }

  render () {
      const date = moment().format('MM/DD');
      let message = this.props.message
      let replyOffer;

      if (message.count == 1) {
        replyOffer =
        <div className="one-reply-box" onClick={() => { this.props.receiveCurrentMessage(message)}}>
            <img className="small-reply-avatar" src={message.replies[0].avatar} />
            &nbsp;<span className="replies-label">{message.count} Reply </span>
        </div>
      } else if (message.count >= 2) {
        replyOffer =
        <div className="replies-box" onClick={() => { this.props.receiveCurrentMessage(message)}}>
            <img className="small-reply-avatar" src={message.replies[0].avatar} />
            <img className="small-reply-avatar" src={message.replies[1].avatar} />
            &nbsp;<span className="replies-label">{message.count} Replies</span>
        </div>
      } else {
        replyOffer =
        <div className="reply-box" onClick={() => { this.props.receiveCurrentMessage(message)}}>
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
  }
}



const mapStateToProps = (state) => {
  return ({});
};


const mapDispatchToProps = (dispatch) => {
  return({
    receiveCurrentMessage: (message) => dispatch(receiveCurrentMessage(message))
  });
};



//
// };

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SelectedMessageItem);
