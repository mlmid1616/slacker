import React from 'react';

const SearchListItem = (props) => {
  let user = this.props.user;
  render(
    <li onClick={this.props.moveUser(user)}>
      {user.name}
    </li>
  );
};

export default SearchListItem; 
