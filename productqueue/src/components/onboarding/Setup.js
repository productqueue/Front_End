import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { } from '../../actions/index.js';
import { Button } from '../../styles';

class SelectProjects extends Component {
  constructor(props){
    super(props)
    this.state = {
        userinfo: [],
    }
}
render(){
    return(
        <div>
            <Link exact to="/dashboard"><Button>Projects</Button></Link>
        </div>
        )
}
}

const mapStatetoProps = state => {
    console.log('Setup====mapStateToProps', state)
    return {
      userInfo: state
    };
  };
  export default connect(
    mapStatetoProps,
    { }
  )(SelectProjects)