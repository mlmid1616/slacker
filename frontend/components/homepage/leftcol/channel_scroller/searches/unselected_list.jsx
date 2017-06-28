import React from 'react';
import SearchListItem from './search_list_item';

class UnselectedList extends React.Component {
  constructor(props){
    super(props);
  }

  render(props){
    let moveUser = this.props.moveUser;
    let users = this.props.unselected;
    users.map(
      user => <SearchListItem moveUser={moveUser} user={user}/>
    );

  }
}

export default UnselectedList;
