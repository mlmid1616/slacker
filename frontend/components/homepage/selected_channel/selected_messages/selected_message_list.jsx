import React from 'react';
import { withRouter } from 'react-router';
import SelectedMessageItem from './selected_message_item';
import ReactDOM from 'react-dom';

class SelectedMessageList extends React.Component {

  constructor(props) {
    super(props);
  }

  // scrollToBottom () {
  //
  // const node = ReactDOM.findDOMNode(selectedMessageList);
  // node.scrollIntoView({ behavior: "smooth" });
  // }
  //
  //
  // componentDidUpdate() {
  //   this.scrollToBottom();
  // }


  componentDidMount() {
    const channel = this.props.channel;
    this.props.fetchSelectedMessages(channel);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.messages.slice(-1).id !== this.props.messages.slice(-1).id ||
        nextProps.channel !== this.props.channel ) {
      const channel = this.props.channel;
      this.props.fetchSelectedMessages(channel);
    }
  }

  // if (nextProps.channel !== this.props.channel){
  //   const channel = this.props.channel;
  //   this.props.fetchSelectedMessages(channel);
  // }

  render(){
    const that = this;
    const allMessages = this.props.messages.map( (message, idx) => {
        if (message.channel_id === parseInt(that.props.channel)) {
          return <SelectedMessageItem message={message} key={idx}/> ;
        }
      }
    );

    return(
      <ul className="unordered-message-list">
        {allMessages}
      </ul>
    );
  }
}

export default withRouter(SelectedMessageList);
