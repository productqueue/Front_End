import React,{Component} from 'react';
import { connect } from "react-redux";
import Project from './Project';
import { readInfo } from '../../actions';

class UserProjects extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects: []
        }
    }
    
    componentDidMount(){
        const user_id = localStorage.getItem("user_id")
        if (localStorage.getItem("token") && localStorage.getItem("user_id")){
            this.props.readInfo(user_id)
            this.setState({projects: this.props.projects})
        }
    }
    
    componentDidUpdate(prevProps){
        if(prevProps.projects !== this.props.projects){
            this.setState({projects: this.props.projects})
        }
    }

    render(){
        
        if (localStorage.getItem("token") && localStorage.getItem("user_id")){
            return(
                <div>
                    <p>Let's get started {this.props.user.username} these are your projects</p>
                    <h2>Projects</h2>
                    {this.state.projects.map((project,id) =>{
                        return <Project project={project} key={id}/>
                    })}
                </div>
            )
            } else {
                return (
                    <div>
                    <p>Please log in...</p>
                    </div>
                )
            }
        
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps Projects', state)
    return {
      projects: state,
      user: state
    };
  };
  
  export default connect(
    mapStateToProps,
    {readInfo}
  )(UserProjects);