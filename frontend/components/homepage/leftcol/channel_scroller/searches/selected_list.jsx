import React from 'react';
import SearchListItem from './search_list_item';

class SelectedList extends React.Component {
  constructor(props){
    super(props);
  }

  render(props){
    let moveUser = this.props.moveUser;
    let users = this.props.selected;
    users.map(
      user => <SearchListItem moveUser={moveUser} user={user}/>
    );

  }
}

export default SelectedList; 
