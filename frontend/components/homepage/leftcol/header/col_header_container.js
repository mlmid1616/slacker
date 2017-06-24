import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../../actions/session_actions';
import ColHeader from './col_header';

const mapStateToProps = (state, ownProps) => {
  return (
    {
      channel_id: ownProps.channel_id
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    logout: () => dispatch(logout())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColHeader);
