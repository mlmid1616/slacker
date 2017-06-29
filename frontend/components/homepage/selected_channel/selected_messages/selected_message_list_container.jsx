import { connect } from 'react-redux';
import SelectedMessageList from './selected_message_list';
import { fetchSelectedMessages } from '../../../../actions/message_actions';

const mapStateToProps = (state, { channel_id }) => {

  return ({
    channel: channel_id,
    messages: Object.keys(state.messages).map(
      (key) => {
        const message = state.messages[key];
        const author = state.users[message.user_id];
        return Object.assign(message, {authorName: author.username, authorPic: author.avatar_url});
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
