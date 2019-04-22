import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../actions';
import {Button, Form, FormGroup} from '../../styles';
import Loader from 'react-loader-spinner';

class Register extends Component {
  state = {
    credentials: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      company: '',
    }
  }

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.register(this.state.credentials).then(() => {
      this.props.history.push({
        pathname: '/login',
        state: {
          email: this.state.credentials.email,
          password: this.state.credentials.password
        }
      })
    })
  }

  render(){
      return(
          <FormGroup>
            <h2>Registration Page</h2>
            <Link to="/login">Login here.</Link> 
            <Form onSubmit={this.onSubmit}>
              <label htmlFor="first_name">First Name *</label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                placeholder="First Name"
                value={this.state.credentials.first_name}
                onChange={this.handleChanges}
              />
              <>
                <label htmlFor="last_name">Last Name *</label>
                <input
                  id="last_name"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={this.state.credentials.last_name}
                  onChange={this.handleChanges}
                />
              </>
              <>
                <label htmlFor="company">Company Name *</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={this.state.credentials.company}
                  onChange={this.handleChanges}
                />
              </>
              <>
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  value={this.state.credentials.email}
                  onChange={this.handleChanges}
                />
              </>
              <>
                <label htmlFor="password">Password *</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.credentials.password}
                  onChange={this.handleChanges}
                />
              </>
              <Button>
                {" "}
                {this.props.registerUser ? (
                  <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                ) : (
                  "New User"
                )}
              </Button>
            </Form>
          </FormGroup>
          
      )
  }

}

export default connect(
    null,
    { register }
  )(Register)