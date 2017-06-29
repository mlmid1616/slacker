import React from 'react';

const SearchListItem = ({user, moveUser}) => {

  return (
    <div className="search-list-item">
      <li onClick={moveUser(user)}>
        <img className="authorPic" src={user.avatar_url} />
        {user.username}
      </li>
    </div>
  );
};

export default SearchListItem;
