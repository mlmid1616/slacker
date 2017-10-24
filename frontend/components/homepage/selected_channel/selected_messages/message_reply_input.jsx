import React from 'react';
import { createMessageReply } from '../../../../actions/message_actions'
import { connect } from 'react-redux';

class MessageReplyInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reply: "Reply"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.empty = this.empty.bind(this);
  }



  empty(type) {
    return (e) => {
      e.preventDefault();
      if (e.currentTarget.value === "Reply"){
        this.setState({[type]:''});
      }
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({reply:''});
    // const reply_obj = {content: this.state.reply, message_id: this.props.message_id};
    // this.props.createMessageReply(reply_obj);
  }



  render(){

    return(
      <div className="reply-input-div">
        <form className="reply-input-form" onSubmit={this.handleSubmit}>
          <input
            value={this.state.message}
            onClick={this.empty("reply")}
            onChange={this.update("reply")}
            />
        </form>
      </div>
    );
  }
}
// <input type="submit" value="Send Message" />

const mapStateToProps = (state, { channelId }) => {
  return ({});
};


const mapDispatchToProps = (dispatch) => {
  return({
    createMessageReply: (reply) => { return dispatch(createMessageReply(reply))}
  });
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(MessageReplyInput);
