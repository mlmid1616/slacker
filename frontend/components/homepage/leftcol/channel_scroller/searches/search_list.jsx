import React from 'react';
import SelectedList from './selected_list';
import UnselectedList from './unselected_list';

class SearchList extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      selected:[],
      unselected: [...this.props.users]
    };
  }

  // this.state = {
  //   name: "Channel Name",
  //   usernames: "Filter by username",
  //   secret: false
  // };

  moveUser(origin, destination, clicked_user) {
    const oldOrigin = this.state[origin];
    const oldDestination = this.state[destination];

    if (origin){
      const newOrigin = oldOrigin.filter( (user) => user.id !== clicked_user.id  );
      const newDestination = [...oldDestination, clicked_user];

      this.setState({
        [origin]: newOrigin,
        [destination]: newDestination,
      });
    }
  }

  render(){
    return(
      <div>
        <SelectedList moveUser={this.moveUser.bind(this, "selected", "unselected")}
          selected={this.state.selected}/>
        <UnselectedList moveUser={this.moveUser.bind(this, "unselected", "selected")}
          unselected={this.state.unselected} />
      </div>
    );
  }
}

export default SearchList;
