import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SelectedList from '../searches/selected_list';
import UnselectedList from '../searches/unselected_list';


class NewDirectMessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      secret: true,
      selected:[],
      unselected: [...this.props.users]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.empty = this.empty.bind(this);
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
      if (e.currentTarget.value === "Filter by username"){
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
    e.preventDefault();
    const name_array = this.state.selected.map( (user) => user.username )
    const name_string = name_array.toString();

    const user_ids = this.state.selected.map( (user) => user.id )
    this.setState({name: name_string, selected: user_ids},
      ()=>{this.props.createMembership(this.state)}
    );
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
            value="Create Direct Message" />
        </form>

      </div>
    );
  }

}


export default NewDirectMessageForm;
