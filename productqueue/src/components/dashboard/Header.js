import React, { Component } from "react";
import { Link } from "react-router-dom";
import {HeaderComp} from '../../styles';

export class Header extends Component {
state = {
    user_id: null
  };

  componentDidMount = () => {
      this.getUserID();
    };
  
  getUserID = () => {
  const user_id = localStorage.getItem("user_id");
  this.setState({ ...this.state, user_id: user_id });
  return user_id;
  };
  
  Logout = () => {
  localStorage.removeItem("user_id");
  localStorage.removeItem("token");
  };

  render(){
      const user_id = localStorage.getItem("user_id");
      if (!user_id) {
          return (
              <HeaderComp>
                <Link to={`/`}>
                  <h2>Product Queue</h2>
                </Link>
                <Link to={`/register`}>
                  <p>Register</p>
                </Link>
                <Link to={`/login`}>
                  <p>Login</p>
                </Link>
              </HeaderComp>
          );
        } else if (user_id) {
          return (
              <HeaderComp>
                <Link to={`/`}>
                  <h2>Product Queue</h2>
                </Link>
                <Link to="/dashboard">
                  <p>Dashboard</p>
                </Link>
                <Link to={`/settings`}>
                  <p>Settings</p>
                </Link>
                <Link to={`/login`}>
                  <p onClick={this.Logout}>Logout</p>
                </Link>
              </HeaderComp>
          );
        }
      }
  }
  
export default Header;