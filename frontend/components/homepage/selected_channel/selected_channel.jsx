import React from 'react';

import SelectedHeader from './selected_header/selected_header';
import SelectedMessageListContainer from './selected_messages/selected_message_list_container';
import SelectedInputContainer from './selected_input/selected_input_container';


const SelectedChannel = (props, ownProps) => {

  const channel_id = props.channel_id;

  return (
    <div className="selected-channel">
      <SelectedHeader />
      <SelectedMessageListContainer className="selected-message-list" channel_id={channel_id} />
      <SelectedInputContainer channel_id={channel_id}/>
    </div>
  );
};

export default SelectedChannel;
