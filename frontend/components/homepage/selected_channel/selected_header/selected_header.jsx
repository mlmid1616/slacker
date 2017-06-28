import React from 'react';

class SelectedHeader extends React.Component {
  constructor (props) {
    super(props);

  }

  render(){

    let channel_name = this.props.channel_name.name;
    return (
      <div className="selected-header">
        <div className="selected-header-text">
          <h2>{channel_name}</h2>
        </div>
      </div>
    );
  }
}

export default SelectedHeader;
