import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class NewDirectMessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      usernames: "Filter by usernames",
      secret: true
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
      this.setState({name:this.state.usernames});
      this.props.createMembership(this.state);
    }


  render(){
    return(
      <div className="new-channel-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            Enter the usernames.
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


export default NewDirectMessageForm;
