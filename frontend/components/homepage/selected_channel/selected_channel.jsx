import React from 'react';

import SelectedHeaderContainer from './selected_header/selected_header_container';
import SelectedMessageListContainer from './selected_messages/selected_message_list_container';
import SelectedInputContainer from './selected_input/selected_input_container';


const SelectedChannel = (props, ownProps) => {

  const channel_id = props.channel_id;

  return (
    <div className="selected-channel">
      <div className="selected-channel-header">
        <SelectedHeaderContainer />
      </div>
      <SelectedMessageListContainer className="selected-message-list" channelId={channel_id} />
      <SelectedInputContainer channel_id={channel_id}/>
    </div>
  );
};

export default SelectedChannel;
