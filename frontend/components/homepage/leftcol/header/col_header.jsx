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
    debugger 
    return (
      <div className="col-header">
        <button className="logout" onClick={this.handleClick}>
        Logout
        </button>
        <h1>Hi from col header</h1>
      </div>
    );
  }
}

export default withRouter(ColHeader);
