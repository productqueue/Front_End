import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

//Styles
// import { GlobalStyle } from './styles/global';
import {AppComp} from './styles';
// components
import Header from './components/dashboard/Header';
import Welcome from './components/onboarding/Welcome';
import Dashboard from './components/dashboard/Dashboard';
import Setup from './components/onboarding/Setup';


const Home = props => {
  return(
    <div>
      <h1>Welcome to Product Queue</h1>
    </div>
  )
  
}

class App extends Component {
  state = {
    userInfo: []
  }
  
  render() {
    return (
      <Router>
        {/* <GlobalStyle/> */}
        <AppComp>
          <Header/>
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/new-user" component={Welcome} />
            <Route exact path="/new-user/setup" component={Setup} />
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
  {}
)(App);
