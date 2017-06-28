import React from 'react';
import Modal from 'react-modal';

import ChannelListItem from './channel_list_item';
import NewChannelFormContainer from './new_channel_form_container';
import NewDirectMessageFormContainer from './new_direct_message_form_container';

class ChannelList extends React.Component {
  constructor(props){
    super(props);


    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  closeModal(e) {
      if (this.state.isOpen){
        $('.transform').toggleClass('transform-active');
      }
      // this.props.clearErrors();
      let that = this;
      setTimeout(function(){
        that.setState({ isOpen: false });
      }, 300);
    }

  openModal(){
  this.setState({ isOpen: true });
  }

  handleModal(e){
    //
   this.openModal();
  }

  componentWillMount(){
    Modal.setAppElement('body');
  }


  handleClick() {

  }


  componentDidMount(){

    this.props.fetchUserChannels(this.props.currentUser);
    this.props.fetchAllUsers();
  }

  render(){
    const customStyles = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(400, 400, 500, 1)'
      },
      content : {
      top                   : '40%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      outline               : 'none',
      border                : '0px'
  }
  };

    let allChannels = this.props.channels.map(
      (channel,idx) => {
        if (!channel.private) {
          return <ChannelListItem channel={channel} key={idx}/>;
        }
      });

      let allDirectMessages = this.props.channels.map(
        (channel, idx) => {
          if (!!channel.private) {
            return <ChannelListItem channel={channel} key={idx} />;
          }
        }
      );

    // let allDirectMessages = this.props.channels.map(
    //   (channel,idx) => {
    //     if (channel.private === false){
    //       <DirectMessageItem dmessage={dmessage} key={idx}/>;
    //     }
    //   });


    return(
      <div className="channel-list">
        <div>
          <div className="channel-and-form">
            <Modal
              onRequestClose={this.closeModal}
              isOpen={this.state.isOpen}
              contentLabel="Modal"
              style={customStyles} >
              <NewChannelFormContainer  />
            </Modal>

              <span className="channel-label">
                CHANNELS
              </span>
              <span className="button">
                <i className="fa fa-plus-circle"
                  aria-hidden="true"
                  onClick={this.handleModal}></i>
              </span>
          </div>
        </div>

          <ul className="big-text-nav-bar">

            <div className="open-channel">
              {allChannels}
            </div>
          </ul>


          <Modal
            onRequestClose={this.closeModal}
             isOpen={this.state.isOpen}
             contentLabel="Modal"
             style={customStyles} >
            <NewDirectMessageFormContainer  />
          </Modal>


          <ul className="big-text-nav-bar">
            <div className="channel-and-form">
              <span>
                DIRECT MESSAGES
              </span>
              <span className="button">
                <i className="fa fa-plus-circle"
                  aria-hidden="true"
                  onClick={this.handleModal}></i>
              </span>
            </div>
            <div className="closed-channel">
              {allDirectMessages}
            </div>
          </ul>
      </div>
    );
  }
}

export default ChannelList;









// <button className="" onClick={this.handleModal}>
//   make channel
// </button>
