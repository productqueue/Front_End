import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateProjectInfo, deleteInfo} from '../../actions';
import {Button, ProjectCard} from '../../styles';


class ProjectInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
          disabled: false,
          project: []
        }
      }

      componentDidMount(){
          this.setState({project: this.props.location.state.project})
      }
 
    updateProject = e => {
      const token = localStorage.getItem("token");
      const data = localStorage.getItem('data')
      const newInfo = this.state.project;
      e.preventDefault()
      this.props.updateProjectInfo(data, newInfo, token)
      this.setState({
        disabled: true
      })
    }

    deleteProject = e =>{
        const token = localStorage.getItem("token");
        e.preventDefault()
        this.props.deleteInfo(
            this.state.project.user_id,
            this.state.project.id,
            token)
            .then(() => {
                this.props.history.push('/dashboard')})
    }
  
    changeHandler = e => {
      this.setState({
        project: {
          ...this.state.project,
          [e.target.name]: e.target.value
        }
      })
    }
  
    editHandler = () => {
      if (!this.state.disabled) {
        this.setState({
          project: this.props.project,
          disabled: true
        })
      } else {
        this.setState({
          disabled: false
        })
      }
    }
    
    render() {
        return (
      <ProjectCard>
        <fieldset disabled={this.state.disabled}>
              <form onSubmit={this.updateProject}>
                  <p onClick={() => this.editHandler()}>
                  {this.state.disabled ? 'EDIT' : 'CANCEL'}
                  </p>
                  <label htmlFor="project_name">Project Name: </label>
                  <input
                  type="text"
                  id="project_name"
                  name={this.state.project.name}
                  onChange={this.changeHandler}
                  defaultValue={this.state.project.name}
                  disabled={this.disabled}
                  />
  
                  <label htmlFor="first_name">First Name: </label>
                  <input
                  type="text"
                  id="first_name"
                  name={this.state.project.first_name}
                  onChange={this.changeHandler}
                  defaultValue={this.state.project.first_name}
                  disabled={this.disabled}
                  />
  
                  <label htmlFor="last_name">Last Name: </label>
                  <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder={this.state.project.last_name}
                  onChange={this.changeHandler}
                  defaultValue={this.state.project.last_name}
                  disabled={this.disabled}
                  aria-label="email"
                  />
  
                  <label htmlFor="company">Company: </label>
                  <input
                  type="text"
                  id="company"
                  name={this.state.project.company}
                  onChange={this.changeHandler}
                  defaultValue={this.state.project.company}
                  disabled={this.disabled}
                  />
                  <label htmlFor="discription">Discription: </label>
                  <input
                  type="text"
                  id="discription"
                  name={this.state.project.description}
                  onChange={this.changeHandler}
                  defaultValue={this.state.project.description}
                  disabled={this.state.disabled}
                  />
                  <label htmlFor="status">Status: </label>
                  <input
                  type="text"
                  id="status"
                  name={this.state.project.status}
                  onChange={this.changeHandler}
                  defaultValue={this.state.project.status}
                  disabled={this.state.disabled}
                  />
                  {this.state.disabled ? null : <Button type="submit">Submit</Button>}
                  {this.state.disabled ? null : <Button onClick={this.deleteProject}>Delete</Button>}
              </form>
              </fieldset>
      </ProjectCard>
    )
}
};

const mapStateToProps = state => {
    console.log("mapStateToProps Projects", state);
    return {
      projects: state.readReducer.info,
      user: state.readReducer.info
    };
  };
  
  export default connect(
      null,
      {updateProjectInfo, deleteInfo}
  )(ProjectInfo);