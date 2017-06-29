import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../../actions/session_actions';
import { fetchCurrentChannel } from '../../../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

import ColHeader from './col_header';

const mapStateToProps = (state, ownProps) => {
  let channel_name = "";
  let channel_id = "";
  if (state.channels[parseInt(ownProps.match.params.id)]) {
    channel_id = parseInt(ownProps.match.params.id);
    channel_name = state.channels[channel_id];
  }

  return (
    {
      channel_name: channel_name,
      current_user: state.session.currentUser.username
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    logout: () => dispatch(logout()),
    fetchCurrentChannel: (channel_name) => dispatch(fetchCurrentChannel(channel_name))
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ColHeader));
