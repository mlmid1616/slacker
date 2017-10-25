import React from 'react';

import SelectedHeaderContainer from './selected_header/selected_header_container';
import SelectedMessageListContainer from './selected_messages/selected_message_list_container';
import SelectedInputContainer from './selected_input/selected_input_container';
import MessageReplies from './selected_messages/message_replies';

const SelectedChannel = (props, ownProps) => {

  const channel_id = props.channel_id;

  return (
    <div className="selected-channel">
      <div className="selected-channel-header">
        <SelectedHeaderContainer />
      </div>
      <SelectedMessageListContainer className="selected-message-list" channelId={channel_id} />
      <MessageReplies />
      <SelectedInputContainer channel_id={channel_id}/>
    </div>
  );
};

export default SelectedChannel;
