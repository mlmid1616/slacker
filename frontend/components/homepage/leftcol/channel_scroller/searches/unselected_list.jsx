import React from 'react';
import SearchListItem from './search_list_item';

class UnselectedList extends React.Component {
  constructor(props){
    super(props);
  }

  render(props){
    let moveUser = this.props.moveUser;
    let allUnselectedUsers = this.props.unselected.map(
      function (user, index){
        return(
          <SearchListItem key={index} moveUser={moveUser} user={user}/>
        );
      }
    );

    return(
      <ul>
        {allUnselectedUsers}
      </ul>
    );

  }
}

export default UnselectedList;
