import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createInfo} from '../../actions';

class NewProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
          disabled: false,
          project: {
            name: '',
            description: ''
          }
        }
      }

      createProject = e => {
        const token = localStorage.getItem("token");
        const data = JSON.parse(localStorage.getItem('data'))
        const newInfo = this.state.project;
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
      <>
        <h3>Create New Project</h3>
          <div className="ui placeholder segment">
            <form className="ui form" onSubmit={this.createProject}>
                <div className="field">
                  <label htmlFor="name">Project Name: </label>
                  <div className="ui left icon input">
                    <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={this.changeHandler}
                    disabled={this.disabled}
                    />
                    <i aria-hidden="true" className="user icon" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="description">Description: </label>
                  <div className="ui left icon input">
                    <input
                    id="description"
                    type="text"
                    name="description"
                    onChange={this.changeHandler}
                    disabled={this.state.disabled}
                    />
                    <i aria-hidden="true" className="user icon" />
                  </div>
                </div>
                <button className="ui red button" type="submit">Submit</button>
            </form>
          </div>
        </>
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