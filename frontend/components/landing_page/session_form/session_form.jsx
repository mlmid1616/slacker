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
    debugger
    e.preventDefault();
    const user = this.state;
    if (this.props.type === "login"){
      this.props.login({user});
    } else {
      this.props.signup({user});
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
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let alternative;
    if (this.props.type === "login") {
      alternative = "login";
    } else {
      alternative = "signup";
    }
    // debugger
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          Please {this.props.type}.
          {this.renderErrors()}
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
