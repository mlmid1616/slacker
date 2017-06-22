import React from 'react';

const ChannelListItem = ({channel}) => {
  return(
    <li>
      {channel.name}
    </li>
  );
};

export default ChannelListItem;
