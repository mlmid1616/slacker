import React from 'react';

import SelectedHeader from './selected_header/selected_header';
import SelectedMessageListContainer from './selected_messages/selected_message_list_container';
import SelectedInput from './selected_input/selected_input';


const SelectedChannel = (props) => {
  const id = props.match.params.id;

  return (
    <div>
      <SelectedHeader />
      <SelectedMessageListContainer channel={id} />
      <SelectedInput />
    </div>
  );
};

export default SelectedChannel;
