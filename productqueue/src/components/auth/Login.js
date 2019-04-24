import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, readInfo } from '../../actions';
import {Button, FormGroup} from '../../styles';
import Loader from 'react-loader-spinner';

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
          <FormGroup>
            <h2>Login Page</h2>
            <Link to="/register">Register here.</Link> 
            <form onSubmit={this.loginAttempt}>
              <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  value={this.state.credentials.email}
                  onChange={this.handleChange}
                />
                <label htmlFor="password">Password *</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.credentials.password}
                  onChange={this.handleChange}
                />
                <Button>
                    {" "}
                    {this.props.loggingIn ? (
                    <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                    ) : (
                    "Log in"
                    )}
                </Button>
            </form>
          </FormGroup>
      )
  }
}

export default connect(
    null,
    { login, readInfo }
  )(Login)