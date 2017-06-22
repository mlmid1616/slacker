import React from 'react';

import ColHeaderContainer from './header/col_header_container';
import ChannelList from './channels/channel_list';
import DirectMessageList from './direct_messages/direct_message_list';

const LeftCol = () => {
  return (
    <div>
      <ColHeaderContainer />
      <ChannelList />
      <DirectMessageList />
    </div>
  );
};

export default LeftCol;
