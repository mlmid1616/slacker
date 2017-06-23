import { connect } from 'react-redux';
import SelectedMessageList from './selected_message_list';
import { fetchSelectedMessages } from '../../../../actions/message_actions';

const mapStateToProps = (state, { channel }) => {
  return ({
    channel: channel,
    messages: Object.keys(state.messages).map( (key) => state.messages[key] )
  });
};


const mapDispatchToProps = (dispatch) => {
  return({
    fetchSelectedMessages: (channel) => dispatch(fetchSelectedMessages(channel))
  });
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SelectedMessageList);
