import React from 'react';

import SelectedHeader from './selected_header/selected_header';
import SelectedMessageList from './selected_messages/selected_message_list';
import SelectedInput from './selected_input/selected_input';


const SelectedChannel = () => {
  return (
    <div>
      <SelectedHeader />
      <SelectedMessageList />
      <SelectedInput />
    </div>
  );
};

export default SelectedChannel;
