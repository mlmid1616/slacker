import React from 'react';

class MessageReplies extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      // <ul className="message-replies">
      //   <li>Helloooooo!!!!</li>
      // </ul>
      <div className="big">
        ........Reply Thread.....
      </div>
    )
  }

}

// const mapStateToProps = (state, { channelId }) => {
//
//   return ({
//     channel: channelId,
//     messages: Object.keys(state.messages).map(
//       (key) => {
//         const message = state.messages[key];
//         const author = state.users[message.user_id];
//         return Object.assign(message, {authorName: author.username, authorPic: author.avatar_url});
//       }
//     )
//   });
// };
//
//
// const mapDispatchToProps = (dispatch) => {
//   return({
//     fetchSelectedMessages: (channel) => {; return dispatch(fetchSelectedMessages(channel))}
//   });
// };
//
// export default connect (
//   mapStateToProps,
//   mapDispatchToProps
// )(SelectedMessageList);

export default MessageReplies;
