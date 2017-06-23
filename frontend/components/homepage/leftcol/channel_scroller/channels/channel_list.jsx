import React from 'react';
import Modal from 'react-modal';

import ChannelListItem from './channel_list_item';
import NewChannelFormContainer from './new_channel_form_container';

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
  }

  render(){
    const customStyles = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(50, 50, 50, 0.50)'
      },
      content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
  }
  };
    let allChannels = this.props.channels.map( (channel,idx) => <ChannelListItem channel={channel} key={idx}/>);
    return(
      <div className="channel-list">
          <Modal
            onRequestClose={this.closeModal}
             isOpen={this.state.isOpen}
             contentLabel="Modal"
             style={customStyles} >
            <NewChannelFormContainer  />
          </Modal>
            <button className="" onClick={this.handleModal}>
              Make a new channel!
          </button>
          <br />
          <ul>
            {allChannels}
            <p>channel list</p>
          </ul>
      </div>
    );
  }
}

export default ChannelList;
