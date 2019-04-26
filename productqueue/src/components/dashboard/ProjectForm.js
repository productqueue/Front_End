import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProjectInfo, deleteInfo } from "../../actions";

class ProjectInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      project: []
    };
  }

  componentDidMount() {
    this.setState({ project: this.props.location.state.project });
  }

  updateProject = e => {
    const token = localStorage.getItem("token");
    const data = JSON.parse(localStorage.getItem("data"));
    const newInfo = this.state.project;
    e.preventDefault();
    this.props.updateProjectInfo(data, newInfo, token);
    this.setState({
      disabled: true
    });
  };

  deleteProject = e => {
    const token = localStorage.getItem("token");
    const userId = this.state.project.user_id;
    const projectId = this.state.project.id;
    e.preventDefault();
    this.props
      .deleteInfo(userId, projectId, token)
      .then(() => {
        this.props.history.push("/dashboard");
      });
  };

  changeHandler = e => {
    this.setState({
      project: {
        ...this.state.project,
        [e.target.name]: e.target.value
      }
    });
  };

  editHandler = () => {
    if (!this.state.disabled) {
      this.setState({
        project: this.props.project,
        disabled: true
      });
    } else {
      this.setState({
        disabled: false
      });
    }
  };

  render() {
    return (
      <>
        <fieldset disabled={this.state.disabled}>
          <div className="ui placeholder segment">
            <form className="ui form" onSubmit={this.updateProject}>
              <p onClick={() => this.editHandler()}>
                {this.state.disabled ? "EDIT" : "CANCEL"}
              </p>
              <div className="field">
                <label htmlFor="project_name">Project Name: </label>
                <div className="ui left icon input">
                  <input
                    type="text"
                    id="project_name"
                    name={this.state.project.name}
                    onChange={this.changeHandler}
                    defaultValue={this.state.project.name}
                    disabled={this.disabled}
                  />
                  <i aria-hidden="true" className="user icon" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="first_name">First Name: </label>
                <div className="ui left icon input">
                  <input
                    type="text"
                    id="first_name"
                    name={this.state.project.first_name}
                    onChange={this.changeHandler}
                    defaultValue={this.state.project.first_name}
                    disabled={this.disabled}
                  />
                  <i aria-hidden="true" className="user icon" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="last_name">Last Name: </label>
                <div className="ui left icon input">
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
                  <i aria-hidden="true" className="user icon" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="company">Company: </label>
                <div className="ui left icon input">
                  <input
                    type="text"
                    id="company"
                    name={this.state.project.company}
                    onChange={this.changeHandler}
                    defaultValue={this.state.project.company}
                    disabled={this.disabled}
                  />
                  <i aria-hidden="true" className="user icon" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="discription">Discription: </label>
                <div className="ui left icon input">
                  <input
                    type="text"
                    id="discription"
                    name={this.state.project.description}
                    onChange={this.changeHandler}
                    defaultValue={this.state.project.description}
                    disabled={this.state.disabled}
                  />
                  <i aria-hidden="true" className="user icon" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="status">Status: </label>
                <div className="ui left icon input">
                  <input
                    type="text"
                    id="status"
                    name={this.state.project.status}
                    onChange={this.changeHandler}
                    defaultValue={this.state.project.status}
                    disabled={this.state.disabled}
                  />
                  <i aria-hidden="true" className="user icon" />
                </div>
              </div>

              <div>
                <button className="ui red button" type="submit">
                  Submit
                </button>
                <button className="ui red button" onClick={this.deleteProject}>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </fieldset>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps Projects", state);
  return {
    projects: state.readReducer.info,
    user: state.readReducer.info
  };
};

export default connect(
  mapStateToProps,
  { updateProjectInfo, deleteInfo }
)(ProjectInfo);
