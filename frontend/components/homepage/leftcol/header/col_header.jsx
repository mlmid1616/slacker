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
        <div className="col-greeting">
          <h4>slacker</h4>
          <div className="current-user-greeting">
            <i className="fa fa-circle" aria-hidden="true"></i><p>{current_user}</p>
          </div>
        </div>
        <i className="fa fa-sign-out"
           aria-hidden="true"
           onClick={this.handleClick}></i>
      </div>
    );
  }
}

export default ColHeader;



// <button className="logout" onClick={this.handleClick}>
//   logout
// </button>
