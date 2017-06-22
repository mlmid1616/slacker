import React from 'react';
import Modal from 'react-modal';

import ChannelListItem from './channel_list_item';
import NewFormContainer from './new_channel_form_container';

class ChannelList extends React.Component {
  constructor(props){
    super(props);

  }


  componentDidMount(){
    this.props.fetchUserChannels(this.props.currentUser);
  }

  render(){
    let allChannels = this.props.channels.map(channel => <ChannelListItem channel={channel} />);
    return(
      <ul>
        {allChannels}
        <p>Channels should be here in the Channel List</p>
      </ul>
    );
  }
}

export default ChannelList;
