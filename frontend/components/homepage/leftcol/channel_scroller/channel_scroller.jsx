import React from 'react';
import ChannelList from './channels/channel_list';
import DirectMessageList from './direct_messages/direct_message_list';

class ChannelScroller extends React.Component {
  render(){
    return(
      <div>
        <ChannelList />
        <DirectMessageList />
      </div>
    );
  }
}

export default ChannelScroller;
