import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createInfo} from '../../actions';

class NewProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
          disabled: false,
          project: {
            project_name: '',
            description: ''
          }
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
        this.props.createInfo(newInfo, data, token)
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
              <form onSubmit={this.createProject}>
                  <p onClick={() => this.editHandler()}>
                  {this.state.disabled ? 'EDIT' : 'CANCEL'}
                  </p>
                  <label htmlFor="project_name">Project Name: </label>
                  <input
                  id="project_name"
                  type="text"
                  name="project_name"
                  onChange={this.changeHandler}
                  defaultValue={this.state.project.project_name}
                  disabled={this.disabled}
                  />
                  <label htmlFor="discription">Discription: </label>
                  <input
                  id="description"
                  type="text"
                  name="description"
                  onChange={this.changeHandler}
                  defaultValue={this.state.project.description}
                  disabled={this.state.disabled}
                  />
                  {this.state.disabled ? null : <button type="submit">Submit</button>}
                  {/* {this.state.disabled ? null : <button onClick={this.deleteProject}>Delete</button>} */}
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
    {createInfo}
)(NewProject);