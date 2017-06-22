import React from 'react';

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
    return (
      <button className="logout" onClick={this.handleClick}>
      Logout
      </button>
    );
  }
}

export default ColHeader;
