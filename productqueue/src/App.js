import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/auth/PrivateRoute';
import { connect } from "react-redux";
import { readInfo } from './actions'

//Styles
// import { GlobalStyle } from './styles/global';
import {AppComp} from './styles';
// components
import Header from './components/dashboard/Header';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

import Dashboard from './components/dashboard/Dashboard';
import Welcome from './components/onboarding/Welcome';
import Setup from './components/onboarding/Setup';
import ProjectForm from './components/dashboard/ProjectForm';


const Home = props => {
  return(
    <div>
      <h1>Welcome to Product Queue</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam voluptatibus maxime labore nostrum nulla in magnam excepturi quasi sapiente veritatis repudiandae amet ullam distinctio, quaerat rerum dignissimos tenetur nesciunt molestiae?</p>
    </div>
  )
  
}

class App extends Component {
  state = {
    userInfo: []
  }

  componentDidMount() {
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
  
  render() {
    return (
      <Router>
        {/* <GlobalStyle/> */}
        <AppComp>
          <Header/>
          <>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/new-user" component={Welcome} />
            <PrivateRoute exact path="/new-user/setup" component={Setup} />
            <PrivateRoute exact path="/edit-project/:id" component={ProjectForm}/>
          </>
        </AppComp>
      </Router>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state
  };
};

export default connect(
  mapStateToProps,
  {readInfo}
)(App);
