import React from 'react';
import { Link } from 'react-router-dom';

const ChannelListItem = ({ channel }) => {
  debugger
  let pretext;
  if (channel.private) {
    pretext = <i className="fa fa-circle" aria-hidden="true"></i>
  } else {
    pretext = "#";
  }
  return(
    <li className="channel-list-item">
      <Link to={`/messages/${channel.id}`}>
        {pretext}{channel.name}
      </Link>
    </li>
  );
};

export default ChannelListItem;
