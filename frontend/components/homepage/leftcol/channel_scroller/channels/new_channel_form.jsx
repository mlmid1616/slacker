import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class NewChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Channel Name",
      usernames: "Filter by username",
      secret: false
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


  render(){
    return(
      <div className="new-channel-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            Enter the channel name and users.
          </div>

          <div>
            <input type="text"
              className="channel-form-input"
              value={this.state.name}
              onClick={this.empty("name")}
              onChange={this.update("name")}
              />
          </div>

          <div>
            <input type="text"
              className="channel-form-input"
              value={this.state.usernames}
              onClick={this.empty("usernames")}
              onChange={this.update("usernames")}
              />
          </div>


          <input className="channel-submit" type="submit"
            value="Create Channel" />
        </form>

      </div>
    );
  }

}


export default NewChannelForm;
