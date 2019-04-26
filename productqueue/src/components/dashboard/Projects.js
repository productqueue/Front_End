import React, { Component } from "react";
import { connect } from "react-redux";
import Project from "./Project";
import NewProject from './NewProject';
import { readInfo, readUserInfo } from "../../actions";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      togglePro: true,
    };
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('data'))
    const token = localStorage.getItem("token");
    if (data.role === 'admin') {
      this.props.readInfo(token);
      this.setState({ projects: this.props.projects });
    } else {
      this.props.readUserInfo(data.id, token);
      this.setState({ projects: this.props.projects });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.projects !== this.props.projects) {
      this.setState({ projects: this.props.projects });
    }
  }

  toggleProjects () {
    this.setState({
      togglePro: !this.state.togglePro,
      toggleAcc: true
    })
  }

  render() {
    return (
      <div>
        <div className="pro-explain">
          <h2>Projects</h2>
          <p>
            Let's get started {this.props.user.first_name} these are your projects
          </p>
        </div>
        <div className="projects">
          {this.state.projects.map((project, id) => {
          return <Project project={project} key={id} />;
        })}
        </div>
        <div className="new-project">
          <button className="ui red button" onClick={this.toggleProjects.bind(this)}>New Project</button>
          {!this.state.togglePro && <NewProject/>}
        </div>
        
      </div>
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
  { readInfo, readUserInfo }
)(Projects);
