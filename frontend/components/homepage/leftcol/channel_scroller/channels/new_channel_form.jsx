import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SelectedList from '../searches/selected_list';
import UnselectedList from '../searches/unselected_list';

class NewChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Channel Name",
      usernames: "Filter by username",
      secret: false,
      selected:[],
      unselected: [...this.props.users]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.empty = this.empty.bind(this);
    this.moveUser = this.moveUser.bind(this);
  }

  // empty (type) {
  //   return (e) => {
  //     e.preventDefault();
  //     if (e.currentTarget.value === "Channel Name" ||
  //         e.currentTarget.value === "Filter by username"){
  //           this.setState({[type]:''});
  //         }
  //   };
  // }

  empty (type) {
    return (e) => {
      e.preventDefault();
      if (e.currentTarget.value === "Channel Name" ||
          e.currentTarget.value === "Filter by username"){
            this.setState({[type]:''});
          }
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    debugger
      e.preventDefault();
      this.props.createMembership(this.state);
    }

  moveUser(origin, destination) {
      return (clicked_user) => {
        return () => {
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
      }
    }

  render(){
    return(
      <div className="new-channel-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            Enter the channel name and select users.
          </div>

          <div>
            <input type="text"
              className="channel-form-input"
              value={this.state.name}
              onClick={this.empty("name")}
              onChange={this.update("name")}
              />
          </div>



          <div className="selected-users-box">
            <div className="selecting-users-label">
              SELECTED USERS
            </div>
            <SelectedList moveUser={this.moveUser("selected", "unselected")}
              selected={this.state.selected}/>
          </div>

          <div className="unselected-users-box">
            <div className="selecting-users-label">
              UNSELECTED USERS
            </div>
            <UnselectedList moveUser={this.moveUser("unselected", "selected")}
              unselected={this.state.unselected} />
          </div>


          <input className="channel-submit" type="submit"
            value="Create Channel" />
        </form>

      </div>
    );
  }

}


export default NewChannelForm;
