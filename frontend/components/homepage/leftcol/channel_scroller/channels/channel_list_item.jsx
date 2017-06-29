import React from 'react';
import { NavLink } from 'react-router-dom';

const ChannelListItem = ({ channel }) => {

  let pretext;
  if (channel.private) {
    pretext = <i className="fa fa-circle" aria-hidden="true"></i>
  } else {
    pretext = "#";
  }
  return(
    <li className="channel-list-item">
      <NavLink activeClassName="selector" exact to={`/messages/${channel.id}`}>
        {pretext}{channel.name}
      </NavLink>
    </li>
  );
};

export default ChannelListItem;
