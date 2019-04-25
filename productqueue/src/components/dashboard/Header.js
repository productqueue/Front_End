import React, { Component } from "react";
import { Link } from "react-router-dom";
import {HeaderComp, Nav} from '../../styles';
import {logout} from '../../actions';
import {connect} from 'react-redux';

export class Header extends Component {
state = {
    user_id: null,
    loggedin: null
  };


  componentDidMount() {
    this.getUserID();
    this.hydrateStateWithLocalStorage();
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
}

componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    this.saveStateToLocalStorage();
}

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  
  getUserID = () => {
  const user_id = localStorage.getItem("user_id");
  if(user_id === null){
    this.setState({ ...this.state, user_id: user_id })
  }
  return user_id;
  };

  Logout = e => {
    e.preventDefault()
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    localStorage.removeItem('data')
    this.props.logout()
  }

  render(){
      const id = this.props.user_id;
      // console.log("user_id is being passed to header", id)
          return (
            <HeaderComp>
            {!id ? (
              <>
                <Link to={`/`}>
                  <h2>Product Queue</h2>
                </Link>
                <Nav>
                  <Link to={`/register`}>
                  <p>Register</p>
                  </Link>
                  <Link to={`/login`}>
                    <p>Login</p>
                  </Link>
                </Nav>
              </>
              ) : (
              <>
                <Link to={`/`}>
                  <h2>Product Queue</h2>
                </Link>
                <Nav>
                  <Link to="/dashboard">
                  <p>Dashboard</p>
                  </Link>
                  <Link to={`/settings`}>
                    <p>Settings</p>
                  </Link>
                  <Link to={`/login`}>
                    <p onClick={this.Logout}>Logout</p>
                  </Link>
                </Nav>
              </>
              )}
              </HeaderComp>
          );
      }
      
  }

  const mapStateToProps = state => {
    return{
      user_id: state.authReducer.user.id
    }
  }
  
export default connect(
  mapStateToProps,
  {logout}
)(Header);