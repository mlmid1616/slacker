import React from 'react';
import { Link } from 'react-router-dom';

const ChannelListItem = ({ channel }) => {
  
  return(
    <li>
      <Link to={`/messages/${channel.id}`}>
        {channel.name}
      </Link>
    </li>
  );
};

export default ChannelListItem;
