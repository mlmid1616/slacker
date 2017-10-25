import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveCurrentMessage } from '../../../../../actions/current_message_actions';


// const ChannelListItem = ({ channel }) => {
//
//   let pretext;
//   if (channel.private) {
//     pretext = <i className="fa fa-circle" aria-hidden="true"></i>
//   } else {
//     pretext = "#";
//   }
//   return(
//     <li className="channel-list-item">
//       <NavLink activeClassName="selector" exact to={`/messages/${channel.id}`}>
//         {pretext}{channel.name}
//       </NavLink>
//     </li>
//   );
// };
//
// export default ChannelListItem;




class ChannelListItem extends React.Component {

  constructor(props){
    super(props)

  }

  render() {
    let channel = this.props.channel;
    let pretext;
    if (channel.private) {
      pretext = <i className="fa fa-circle" aria-hidden="true"></i>
    } else {
      pretext = "#";
    }

    return (
      <li onClick={() => this.props.receiveCurrentMessage({})} className="channel-list-item">
        <NavLink activeClassName="selector" exact to={`/messages/${channel.id}`}>
          {pretext}{channel.name}
        </NavLink>
      </li>
      );
  }
};

const mapStateToProps = (state) => {
  return({});
};


const mapDispatchToProps = (dispatch) => {
  return ({
    receiveCurrentMessage: (message) => dispatch(receiveCurrentMessage(message))
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelListItem));
