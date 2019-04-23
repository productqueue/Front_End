import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../../styles';
import {connect} from 'react-redux';
import {} from "../../actions";

class DashBoard extends React.Component {
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

    render() {
        
        return(
            <div>
                <h1>DashBoard</h1>
                <p>{this.props.message}</p>
                <div>
                    <Link to={'/projects'}><Button>My Projects</Button></Link>
                    <Link to={'/settings'}><Button>Settings</Button></Link>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        
        user: state
    }
}
export default connect(
    mapStateToProps,
    {}
)(DashBoard);