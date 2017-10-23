import { connect } from 'react-redux';
import SelectedMessageList from './selected_message_list';
import { fetchSelectedMessages } from '../../../../actions/message_actions';

const mapStateToProps = (state, { channelId }) => {

  return ({
    channel: channelId,
    messages: Object.keys(state.messages).map(
      (key) => {
        const message = state.messages[key];
        const author = state.users[message.user_id];
        const message_id = key;
        return Object.assign(message, {authorName: author.username, authorPic: author.avatar_url, message_id: key});
      }
    )
  });
};


const mapDispatchToProps = (dispatch) => {
  return({
    fetchSelectedMessages: (channel) => {; return dispatch(fetchSelectedMessages(channel))}
  });
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SelectedMessageList);
