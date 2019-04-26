import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions";
import { connect } from "react-redux";

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
    if (user_id === null) {
      this.setState({ ...this.state, user_id: user_id });
    }
    return user_id;
  };

  Logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("data");
    this.props.logout();
  };

  render() {
    const id = this.props.user_id;
    return (
      <div className="header">
        {!id ? (
          <div className="header-bar container">
            <Link to={`/`}>
              <img src="../../assets/Lambda_Logo.png" alt="logo"/>
              <h2>Product Queue</h2>
            </Link>
            <div className="nav">
              <Link to={`/register`}>
                <button className="ui red button">Register</button>
              </Link>
              <Link to={`/login`}>
                <button className="ui red button">Login</button>
              </Link>
            </div>
          </div>
        ) : (
          <>
          <div className="header-bar container">
            <Link to={`/`}>
              <h2>Product Queue</h2>
            </Link>
              <div className="nav">
                <Link to="/dashboard">
                  <button className="ui red button">Dashboard</button>
                </Link>
                <Link to={`/settings`}>
                  <button className="ui red button">Settings</button>
                </Link>
                <Link to={`/login`}>
                  <button className="ui red button" onClick={this.Logout}>
                    Logout
                  </button>
                </Link>
              </div>
              
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user_id: state.authReducer.user.id
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Header);
