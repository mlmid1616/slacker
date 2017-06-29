import React from 'react';
import SearchListItem from './search_list_item';

class SelectedList extends React.Component {
  constructor(props){
    super(props);
  }

  render(props){

    let allSelectedUsers = this.props.selected.map(
      user => <SearchListItem moveUser={moveUser} user={user}/>
  );

    let moveUser = this.props.moveUser;
    let users = this.props.selected;
    return (
      <ul>
        {allSelectedUsers}
      </ul>
    );
  }
}

export default SelectedList;


// let allDirectMessages = this.props.channels.map(
//   (channel, idx) => {
//     if (!!channel.private) {
//       return <ChannelListItem channel={channel} key={idx} />;
//     }
//   }
// );
