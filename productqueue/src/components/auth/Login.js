import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, readInfo } from '../../actions';

class Login extends Component {
  state = {
    credentials: {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };


  loginAttempt = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => {
        this.props.history.push("/dashboard");
      })
  };


  render(){
      return(
          <div className="ui container">
            <h2>Login Page</h2>
            <Link to="/register">Register here.</Link> 
            <div className="ui placeholder segment">
              <form className="ui form" onSubmit={this.loginAttempt}>
                <div className="field">
                  <label>Username</label>
                  <div className="ui left icon input">
                    <input 
                      id="email"
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      value={this.state.credentials.email}
                      onChange={this.handleChange}
                    />
                    <i aria-hidden="true" className="user icon"></i>
                  </div>
                </div>
                <div className="field">
                  <label>Password</label>
                  <div className="ui left icon input">
                    <input 
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={this.state.credentials.password}
                      onChange={this.handleChange}
                    />
                    <i aria-hidden="true" className="lock icon"></i>
                  </div>
                </div>
                <button className="ui red button">Login</button>
              </form>
            </div>
          </div>
      )
  }
}

export default connect(
    null,
    { login, readInfo }
  )(Login)