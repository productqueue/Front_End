import React, {Component} from 'react';
import {connect} from 'react-redux';
class NewProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
          disabled: false,
          project: []
        }
      }

      componentDidMount(){
          this.setState({project: this.props.project})
      }

      createProject = e => {
        const token = localStorage.getItem("token");
        const data = localStorage.getItem('data')
        const newInfo = this.state.project;
        console.log("NEEEEEEEEEEEEEEEEEEEEEEW", newInfo)
        e.preventDefault()
        this.props.createProjectInfo(data, newInfo, token)
        this.setState({
          disabled: true
        })
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

render(){
    return(
        <div>
            <h3>Create New Project</h3>
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
                  {this.state.disabled ? null : <button type="submit">Submit</button>}
                  {this.state.disabled ? null : <button onClick={this.deleteProject}>Delete</button>}
              </form>
              </fieldset>
        </div>
    )
}
}
const mapStateToProps = state => {
    console.log('mapStateToProps DashBoard', state)
      return {
          project: state.readReducer.info
      }
  }

export default connect(
    mapStateToProps,
    {}
)(NewProject);