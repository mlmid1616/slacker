import React from 'react';
import { withRouter } from 'react-router-dom';

class ColHeader extends React.Component {

  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }
  render(){
    // let channel_id = this.props.channel_id;
    // let currentChannel = this.props.fetchCurrentChannel(channel_id);

    let channel_name = this.props.channel_name.name;
    let current_user = this.props.current_user;
    return (
      <div className="col-header">
        <button className="logout" onClick={this.handleClick}>
        Logout
        </button>
        <h4>slacker</h4>
        <div className="current-user-greeting">
          <p>{current_user}</p>
        </div>
      </div>
    );
  }
}

export default ColHeader;
