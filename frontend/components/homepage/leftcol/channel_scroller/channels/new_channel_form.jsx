import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class NewChannelForm extends React.Component {
  constructor(props) {
    super(props);

  }


  render(){
    return(
      <h1>This is the new channel form</h1>
    );
  }

}


export default NewChannelForm;
//   empty (type) {
//     return (e) => {
//       e.preventDefault();
//       if (e.currentTarget.value === "name" ||
//           e.currentTarget.value === "usernames"){
//             this.setState({[type]:''});
//           }
//     };
//   }
//   // componentWillReceiveProps(nextProps) {
//   //   if (nextProps.loggedIn) {
//   //     this.props.history.push('/channel');
//   //   }
//   // }
//
//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     });
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     const channel = this.state;
//     this.props.createChannel({channel});
//     // if (this.props.type === "login"){
//     //   this.props.login({user}).then(() => { this.props.history.push('/messages');
//     // });
//     // } else {
//     //   this.props.signup({user}).then(() => { this.props.history.push('/messages');
//     // });
//     // }
//
//
//
//
//   }
//
//   // navLink() {
//   //   if (this.props.type === 'login') {
//   //     return <Link to="/signup">sign up instead</Link>;
//   //   } else {
//   //     return <Link to="/login">log in instead</Link>;
//   //   }
//   // }
//
//   renderErrors() {
//     //
//     return(
//       <ul>
//         {this.props.errors.map((error, i) => (
//           <li key={`error-${i}`}>
//             {error}
//           </li>
//         ))}
//       </ul>
//     );
//   }
//
//   render() {
//     // let message;
//     // if (this.props.type === "login") {
//     //   message = "Login";
//     // } else {
//     //   message = "Sign up";
//     // }
//     //
//     return (
//       <div className="">
//         <form onSubmit={this.handleSubmit} className="">
//           <br/>
//           <div className="">
//             <div className="">
//               Make a channel.
//             </div>
//             <div className="">
//               {this.renderErrors()}
//               <br/>
//                 Enter a channel name and its participants.
//               </div>
//           </div>
//           <div className="">
//             <br/>
//               <input type=""
//                 className=""
//                 value={this.state.username}
//                 onClick={this.empty("name")}
//                 onChange={this.update('name')}
//               />
//             <br/>
//               <input type="password"
//                 className=""
//                 value={this.state.password}
//                 onClick={this.empty("friends")}
//                 onChange={this.update('friends')}
//               />
//             <br/>
//             <input className="" type="submit" value={this.props.type} />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
//
// export default withRouter(NewChannelForm);
