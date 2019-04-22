import React, { Component } from "react";
import { Link } from "react-router-dom";
import {HeaderComp, Nav, Button} from '../../styles';

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

  render(){
      const user_id = localStorage.getItem("user_id");
      if (!user_id) {
          return (
              <HeaderComp>
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
                
              </HeaderComp>
          );
        } else if (user_id) {
          return (
              <HeaderComp>
                <Link to={`/`}>
                  <h2>Product Queue</h2>
                </Link>
                <Nav>
                  <Link to="/dashboard">
                  <Button>Dashboard</Button>
                  </Link>
                  <Link to={`/settings`}>
                    <Button>Settings</Button>
                  </Link>
                  <Link to={`/login`}>
                    <Button onClick={this.Logout}>Logout</Button>
                  </Link>
                </Nav>
              </HeaderComp>
          );
        }
      }
  }
  
export default Header;