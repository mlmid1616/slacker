import React from 'react';

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
    let newOrigin = from.filter( (user) => user.username !== user.username  );
    origin = newOrigin;
    destination.concat(clicked_user);
  }

  render(){
    return(
      <div>
        <SelectedList moveUser={this.moveUser.bind(this.selected, this.unselected)}
          selected={this.state.selected}/>
        <UnselectedList moveUSer={this.moveUSer.bind(this.state.unselected, this.state.selected)}
          unselected={this.state.unselected} />
      </div>
    );
  }
}
