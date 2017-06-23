import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class NewChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Channel Name",
      users: "Filter by username"
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

  handleSubmit(channel) {
    let that = this;
    return (e) => {
      e.preventDefault();
      that.props.createChannel(that.state);
    };
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
              value={this.state.name}
              onClick={this.empty("name")}
              onChange={this.update("name")}
              />
          </div>

          <div>
            <input type="text"
              value={this.state.users}
              onClick={this.empty("users")}
              onChange={this.update("users")}
              />
          </div>


          <input className="submit" type="submit"
            value="Create Channel" />
        </form>

      </div>
    );
  }

}


export default NewChannelForm;
