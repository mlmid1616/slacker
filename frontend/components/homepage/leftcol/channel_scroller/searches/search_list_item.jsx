import React from 'react';

const SearchListItem = (props) => {

  let user = props.user;
  return (
    <li onClick={props.moveUser(user)}>
      {user.name}
    </li>
  );
};

export default SearchListItem;
