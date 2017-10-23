/* globals pusher */
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
    let current_channel = this.props.channel;
    this.props.fetchSelectedMessages(current_channel);

    var pusher = new Pusher('7ed0f023347152a1d1c7', {
      cluster: 'us2',
      encrypted: true
    });

    var channel = pusher.subscribe('channel_' + current_channel);
    channel.bind('message_published', (data) => {

      this.props.fetchSelectedMessages(current_channel);
    });
  }

  componentWillReceiveProps(nextProps){

    if (nextProps.messages.slice(-1).id !== this.props.messages.slice(-1).id ||
        nextProps.channel !== this.props.channel ) {
      const channel = nextProps.channel;
      this.props.fetchSelectedMessages(channel);
    }

  }

  componentDidUpdate() {
    this.bottom.scrollIntoView();

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
         <div ref={el => this.bottom = el}></div>
       </ul>
     );
   }
}

export default withRouter(SelectedMessageList);
