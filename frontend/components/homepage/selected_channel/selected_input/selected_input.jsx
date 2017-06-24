import React from 'react';

class SelectedInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: "Message"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.empty = this.empty.bind(this);
  }

  empty(type) {
    return (e) => {
      e.preventDefault();
      if (e.currentTarget.value === "Message"){
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
    // debugger
    const message = {content: this.state.message, user_id: this.props.user_id, channel_id: this.props.channel_id};
    this.props.createSelectedMessage(message);
    // alert("hmm");
  }

  render(){

    return(
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.message}
          onClick={this.empty("message")}
          onChange={this.update("message")}
          />

        <input type="submit" value="Send Message" />
      </form>
    );
  }
}

export default SelectedInput;
