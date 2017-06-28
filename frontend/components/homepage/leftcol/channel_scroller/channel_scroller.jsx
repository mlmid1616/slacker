import React from 'react';
import ChannelListContainer from './channels/channel_list_container';
// import DirectMessageList from './direct_messages/direct_message_list';

class ChannelScroller extends React.Component {
  render(){
    return(
      <div className="channel-scroller">
        <ChannelListContainer />
      </div>
    );
  }
}

export default ChannelScroller;
