import React from 'react';
import { withRouter } from 'react-router';
import SelectedMessageItem from './selected_message_item';

class SelectedMessageList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const channel = this.props.channel;
    this.props.fetchSelectedMessages(channel);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.channel !== this.props.channel){
      const channel = this.props.channel;
      this.props.fetchSelectedMessages(channel);
    }
  }


  render(){
    const that = this;
    const allMessages = this.props.messages.map( (message, idx) => {
      //  
        if (message.channel_id === parseInt(that.props.channel)) {
          return <SelectedMessageItem message={message} key={idx}/> ;
        }
      }
    );

    return(
      <ul>
        {allMessages}
      </ul>
    );
  }
}

export default withRouter(SelectedMessageList);
