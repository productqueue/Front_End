import React, { Component } from "react";
import { connect } from "react-redux";
import Project from "./Project";
import { readInfo, readUserInfo } from "../../actions";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
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

  render() {
    // if (localStorage.getItem("token") && localStorage.getItem("user_id")){
    return (
      <div>
        <p>
          Let's get started {this.props.user.username} these are your projects
        </p>
        <h2>Projects</h2>
        {this.state.projects.map((project, id) => {
          return <Project project={project} key={id} />;
        })}
      </div>
    );
    // } else {
    //     return (
    //         <div>
    //         <p>Please log in...</p>
    //         </div>
    //     )
    // }
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps Projects", state);
  return {
    projects: state.readReducer.info,
    user: state
  };
};

export default connect(
  mapStateToProps,
  { readInfo, readUserInfo }
)(Projects);
