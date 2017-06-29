import React from 'react';
import { connect } from 'react-redux';
import SearchList from './search_list';

const mapStateToProps = (state) => {
  return ({
    users: Object.keys(state.users).map(function (key) { return state.users[key]; })
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({

  });
};

export default connect (
  mapStateToProps,
  null
)(SearchList);
