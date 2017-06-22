import React from 'react';

class ChannelList extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
     
    let allChannels = this.props.fetchUserChannels(this.props.currentUser);
    return(
      <div>
        {allChannels}
      </div>
    );
  }
}

export default ChannelList;
