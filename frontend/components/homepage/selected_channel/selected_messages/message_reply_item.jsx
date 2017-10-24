
import React from 'react';
import moment from 'moment';
// import { receiveCurrentMessage } from '../../../../actions/current_message_actions';
import { connect } from 'react-redux';

class MessageReplyItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    let reply = this.props.reply;
    const date = moment().format('MM/DD');

    return(
      <li className="reply-item">
          <img className="reply-pic" src={reply.avatar} />

          <div className="reply-item-div">
            <div className="reply-author-name">
              <div>{reply.reply_username}</div>
            </div>
            <br />
            <div className="reply-content">
              {reply.reply_content}
            </div>
          </div>
      </li>
    );
  }

}



export default MessageReplyItem;







// <div className="reply-time-stamp">{date}</div>
