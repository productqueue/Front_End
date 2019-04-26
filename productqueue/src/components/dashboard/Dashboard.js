import React, {Component} from 'react';
import {connect} from 'react-redux';
import {} from "../../actions";
import Projects from './Projects';
import AccountInfo from './AccountInfo';

class DashBoard extends Component {
    state = {
        info: [],
        user:{},
        toggleAcc: true,
        togglePro: true,
      };

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

      handleChange = e => {
        this.setState({
          projects: {
            ...this.state.projects,
            [e.target.name]: e.target.value
          }
        });
      };

      toggleAccount () {
        this.setState({
          toggleAcc: !this.state.toggleAcc,
          togglePro: true
        })
      }
      toggleProjects () {
        this.setState({
          togglePro: !this.state.togglePro,
          toggleAcc: true
        })
      }

    render() {
        
        return(
            <div className="dashboard">
              <div className="dash-splash">
                <h1>DashBoard</h1>
                <p>welcome to Product Queue. this is </p>
                <div>
                  <button className="ui red button" onClick={this.toggleProjects.bind(this)}>Projects</button>
                  <button className="ui red button" onClick={this.toggleAccount.bind(this)}>Settings</button>
                </div>
              </div>      
              <div className="container">
                {!this.state.togglePro && <Projects/>}
                {!this.state.toggleAcc && <AccountInfo/>}
              </div>
            </div>
        )
        
    }
}

const mapStateToProps = state => {
  console.log('mapStateToProps DashBoard', state)
    return {
        user: state.readReducer.user
    }
}
export default connect(
    mapStateToProps,
    {}
)(DashBoard);