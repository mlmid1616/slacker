import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../../actions/session_actions';
import ColHeader from './col_header';

const mapStateToProps = (state) => {
  return (
    {}
  );
};

const mapDispatchToProps = (dispatch) => {
  return({
    logout: () => dispatch(logout())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColHeader);
