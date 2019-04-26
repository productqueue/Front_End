import React from "react";
import { Link } from "react-router-dom";

const Project = props => {
  const data = JSON.parse(localStorage.getItem("data"));
  return (
    <div className="pro-cont">
      <div className="ui card">
        <div className="content">
          <div className="header">{props.project.name}</div>
          <div className="meta">{`${props.project.first_name} ${
            props.project.last_name
          }, ${props.project.company}`}</div>
          <div className="discription">{props.project.description}</div>
          <div className="extra content">
            <div className="meta">
              Status:{" "}
              <span className={props.project.status}>
                {" "}
                {props.project.status}
              </span>
            </div>
            <Link
              to={{
                pathname: `/edit-project/${
                  data.role === "admin"
                    ? props.project.id
                    : props.project.user_id
                }`,
                state: { project: props.project }
              }}
            >
              <button className="ui red button">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
