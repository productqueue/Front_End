import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../../styles';
import {connect} from 'react-redux';
import {} from "../../actions";
import Projects from './Projects';

class DashBoard extends Component {
    state = {
        info: [],
        user:{}
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

    render() {
        
        return(
            <div>
                <h1>DashBoard</h1>
                <p>{this.props.message}</p>
                <div>
                    <Link to={'/projects'}><Button>My Projects</Button></Link>
                    <Link to={'/settings'}><Button>Settings</Button></Link>
                    <form onSubmit={this.loginAttempt}>
                      <label htmlFor="search">Search through your project ideas.</label>
                      <input
                        id="search"
                        type="text"
                        name="search"
                        placeholder="Search projects..."
                        value={this.state.projects}
                        onChange={this.handleChange}
                      />
                    </form>
                    <Projects/>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = state => {
  console.log('mapStateToProps DashBoard', state)
    return {
        user: state
    }
}
export default connect(
    mapStateToProps,
    {}
)(DashBoard);