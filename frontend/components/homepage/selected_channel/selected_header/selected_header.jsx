import React from 'react';

class SelectedHeader extends React.Component {
  constructor (props) {
    super(props);

  }

  render(){
    let pretext;
    if (this.props.channel_name.private) {
      pretext = "@";
    } else {
      pretext = "#";
    }
    let channel_name = this.props.channel_name.name;
    return (
      <div className="selected-header">
        <div className="selected-header-text">
          <h2>{pretext}{channel_name}</h2>
          
        </div>
      </div>
    );
  }
}

export default SelectedHeader;
