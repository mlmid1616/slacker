import React from 'react';
import { connect } from 'react-redux';
import MessageReplyItem from './message_reply_item'

class MessageReplies extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
      let originalMessage = this.props.current_message.content;
      let reply1 = "Be the first to reply!"
      debugger
      if (this.props.current_message.count > 0) {
        reply1 = <MessageReplyItem reply={this.props.replies[0]} />
      }
        return (
          <div>
            <div className="big">
              {originalMessage}
            </div>
            <div className="big">
              {reply1}
            </div>
          </div>
        );
    }

}

const mapStateToProps = (state) => {

  return ({
    current_message: state.current_message,
    replies: state.current_message.replies
  })

};

// return ({
//   channel: channelId,
//   messages: Object.keys(state.messages).map(
//     (key) => {
//       const message = state.messages[key];
//       const author = state.users[message.user_id];
//       return Object.assign(message, {authorName: author.username, authorPic: author.avatar_url});
//     }
//   )
// });

const mapDispatchToProps = (dispatch) => {
  return({});
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(MessageReplies);
