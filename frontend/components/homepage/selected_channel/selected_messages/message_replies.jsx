import React from 'react';
import { connect } from 'react-redux';
import MessageReplyItem from './message_reply_item';
import MessageReplyInput from './message_reply_input';


class MessageReplies extends React.Component {
  constructor(props) {
    super(props);

    // this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  // forceUpdateHandler() {
  //   this.forceUpdate();
  // };


    componentWillReceiveProps(nextProps) {
      //  ""
    }
    render() {

      // let x = !!this.props.replies
      //
      // if ( x ) {
      //     let allReplies = this.props.replies.map(
      //       (reply,idx) => {
      //         return <MessageReplyItem reply={reply} key={idx}/>;
      //       });
      // } else {
      //   let allReplies = "no replies"
      // }


      let current_user_avatar = this.props.current_user_avatar;
      let current_user_id = this.props.current_user_id;
      let message_id = this.props.current_message.message_id;
      let originalMessage = this.props.current_message.content;
      let originalAvatar = this.props.current_message.authorPic;
      let reply1 = "No Replies"
      let allReplies = [];
      let i = 0;
      while (i < this.props.current_message.count) {
        allReplies.push(<MessageReplyItem reply={this.props.replies[i]} key={i}/>);
        i += 1;
      }

      if (this.props.current_message.count > 0) {
        reply1 = <MessageReplyItem reply={this.props.replies[0]} />
      }
      //  ""
        return (
          <div>
            <div className="big">
              <div className="original-thread">
                <div>
                  {originalMessage}
                </div>
                <div>
                  <img className="original-avatar" src={originalAvatar} />
                </div>
              </div>
              <div>
                {allReplies}
              </div>
              <MessageReplyInput current_user_avatar={current_user_avatar} message_id={message_id} user_id={current_user_id}  />
            </div>
          </div>
        );
    }

}

const mapStateToProps = (state) => {

  return ({
    current_message: state.current_message,
    replies: state.current_message.replies,
    current_user: state.session.currentUser.id,
    current_user_avatar: state.session.currentUser.avatar_url
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
