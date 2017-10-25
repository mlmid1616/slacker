import React from 'react';
import { connect } from 'react-redux';
import MessageReplyItem from './message_reply_item';
import MessageReplyInput from './message_reply_input';


class MessageReplies extends React.Component {
  constructor(props) {
    super(props);

  }




    componentWillReceiveProps(nextProps) {
    }

    // shouldComponentUpdate(nextProps){
    //
    //   if (this.props.current_message.count > 0) {
    //     return nextProps.current_message.replies.slice(-1)[0].reply_content != this.props.current_message.replies.slice(-1)[0].reply_content;
    //   } else {
    //     return true;
    //   }
    // }


    render() {

      let current_user_id = this.props.current_user_id;
      let message_id = this.props.current_message.message_id;

      let originalMessage;
      if (this.props.current_message.content){
        originalMessage = this.props.current_message.content;
      } else {
        originalMessage = <div className="reply-thread-value">Reply Thread</div>;
      }

      let originalAvatar;
      if ( this.props.current_message.authorPic ) {
        originalAvatar = <img className="original-avatar" src={this.props.current_message.authorPic} />
      } else {
        originalAvatar = "";
      }

      // let originalAvatar = this.props.current_message.authorPic;

      let allReplies = [];
      let i = 0;
      while (i < this.props.current_message.count) {
        allReplies.push(<MessageReplyItem reply={this.props.current_message.replies[i]} key={i}/>);
        i += 1;
      }

      // if (this.props.current_message.count > 0) {
      //   reply1 = <MessageReplyItem reply={this.props.current_message.replies[0]} />
      // }

      let messageReplyInput;
      if ( this.props.current_message.message_id) {
        messageReplyInput = <MessageReplyInput message_id={message_id} user_id={current_user_id}  />;
      } else {
        messageReplyInput = "";
      }

        return (
          <div>
            <div className="big">
              <div className="original-thread">
                <div>
                  <div className="original-message-container">
                    {originalMessage}
                  </div>
                </div>
                <div>
                  {originalAvatar}
                </div>
              </div>
              <div className="all-replies">
                {allReplies}
              </div>
              <div>
                {messageReplyInput}
              </div>
            </div>
          </div>
        );
    }

}

const mapStateToProps = (state) => {

  return ({
    current_message: state.current_message,
    current_user: state.session.currentUser.id,
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
