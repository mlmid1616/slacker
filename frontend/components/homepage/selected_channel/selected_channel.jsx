import React from 'react';

import SelectedHeader from './selected_header/selected_header';
import SelectedMessageListContainer from './selected_messages/selected_message_list_container';
import SelectedInputContainer from './selected_input/selected_input_container';


const SelectedChannel = (props) => {
  const id = props.match.params.id;

  return (
    <div className="selected-channel">
      <SelectedHeader />
      <SelectedMessageListContainer className="selected-message-list" channel={id} />
      <SelectedInputContainer channel={id}/>
    </div>
  );
};

export default SelectedChannel;
