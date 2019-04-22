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
        message: state.users.message,
        user: state.users.user
    }
}
export default connect(
    mapStateToProps,
    {}
)(DashBoard);