import React from 'react';
import SelectedList from './selected_list';
import UnselectedList from './unselected_list';

class SearchList extends React.Component {

  constructor(props){
    super(props);

    this.state = {selected:[],
    unselected: this.props.users};

  }

  // this.state = {
  //   name: "Channel Name",
  //   usernames: "Filter by username",
  //   secret: false
  // };

  moveUser(origin, destination, clicked_user) {
    if (origin){
      let newOrigin = origin.filter( (user) => user.username !== user.username  );
      origin = newOrigin;
      debugger
      destination.concat(clicked_user);
    }
  }

  render(){
    return(
      <div>
        <SelectedList moveUser={this.moveUser.bind(this.state.selected, this.state.unselected)}
          selected={this.state.selected}/>
        <UnselectedList moveUser={this.moveUser.bind(this.state.unselected, this.state.selected)}
          unselected={this.state.unselected} />
      </div>
    );
  }
}

export default SearchList;
