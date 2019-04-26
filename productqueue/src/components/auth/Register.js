import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../actions';

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

  handleChange = e => {
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
          <div className="ui container">
            <h2>Registration Page</h2>
            <Link to="/login">Login here.</Link> 
            <div className="ui placeholder segment">
              <form className="ui form" onSubmit={this.onSubmit}>
                <div className="field">
                  <label>First Name</label>
                  <div className="ui left icon input">
                    <input 
                      id="first_name"
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      value={this.state.credentials.first_name}
                      onChange={this.handleChange}
                    />
                    <i aria-hidden="true" className="user icon"></i>
                  </div>
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <div className="ui left icon input">
                    <input 
                      id="last_name"
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      value={this.state.credentials.last_name}
                      onChange={this.handleChange}
                    />
                    <i aria-hidden="true" className="user icon"></i>
                  </div>
                </div>
                <div className="field">
                  <label>Company Name</label>
                  <div className="ui left icon input">
                    <input 
                      id="company"
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={this.state.credentials.company}
                      onChange={this.handleChange}
                    />
                    <i aria-hidden="true" className="building icon"></i>
                  </div>
                </div>
                <div className="field">
                  <label>Email</label>
                  <div className="ui left icon input">
                    <input 
                      id="email"
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      value={this.state.credentials.email}
                      onChange={this.handleChange}
                    />
                    <i aria-hidden="true" className="address card icon"></i>
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
                <button className="ui red button">Register</button>
              </form>
            </div>
          </div>
      )
  }
}

export default connect(
    null,
    { register }
  )(Register)