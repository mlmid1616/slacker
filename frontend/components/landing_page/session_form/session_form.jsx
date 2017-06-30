import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'username',
      password: 'password'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.empty = this.empty.bind(this);
  }

  empty (type) {
    return (e) => {
      e.preventDefault();
      if (e.currentTarget.value === "username" ||
          e.currentTarget.value === "password"){
            this.setState({[type]:''});
          }
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.props.type === "login"){
      this.props.login({user}).then(() => { this.props.history.push('/messages/9');
    });
    } else {
      this.props.signup({user}).then(() => { this.props.history.push('/messages/9');
    });
    }




  }

  // navLink() {
  //   if (this.props.type === 'login') {
  //     return <Link to="/signup">sign up instead</Link>;
  //   } else {
  //     return <Link to="/login">log in instead</Link>;
  //   }
  // }

  renderErrors() {
    //
    // return(
    //   <ul>
    //     {this.props.errors.map((error, i) => (
    //       <li key={`error-${i}`}>
    //         {error}
    //       </li>
    //     ))}
    //   </ul>
    // );
  }

  render() {
    let message;
    if (this.props.type === "login") {
      message = "Login";
    } else {
      message = "Sign up";
    }
    //
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          <div className="whole-greeting">
            <div className="entry-greeting">
              {message} to commence Slacking.
            </div>
            <div className="entry-message">
              {this.renderErrors()}
              <br/>
                Enter your username and password.
              </div>
          </div>
          <div className="login-form">
            <br/>
              <input type="text"
                className="auth-input"
                value={this.state.username}
                onClick={this.empty("username")}
                onChange={this.update('username')}
              />
            <br/>
              <input type="password"
                className="auth-input"
                value={this.state.password}
                onClick={this.empty("password")}
                onChange={this.update('password')}
              />
            <br/>
            <input className="submit" type="submit" value={this.props.type} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
