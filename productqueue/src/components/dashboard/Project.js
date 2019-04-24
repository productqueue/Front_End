import React from "react";
import { CircleBtn, ProjectCard } from "../../styles";

const Project = props => {
  return (
    <ProjectCard>
      <h4>{props.project.name}</h4>
      <h4>
          {props.project.first_name}
          {props.project.last_name},
          {props.project.company}
      </h4>
      <p>{props.project.description}</p>
        <h4>
          Status:{' '}
          <span className={props.project.status}> {props.project.status}</span>
        </h4>
      <CircleBtn>X</CircleBtn>
      <CircleBtn>O</CircleBtn>
      <fieldset disabled={props.disabled}>
            <form onSubmit={props.updateUser}>
                <p onClick={() => props.editHandler()}>
                {props.disabled ? 'EDIT' : 'CANCEL'}
                </p>

                <label htmlFor="first_name">First Name</label>
                <input
                type="text"
                id="first_name"
                name="first_name"
                onChange={props.changeHandler}
                defaultValue={props.user.first_name}
                disabled={props.disabled}
                />

                <label htmlFor="last_name">Last Name</label>
                <input
                type="text"
                id="last_name"
                name="last_name"
                onChange={props.changeHandler}
                defaultValue={props.user.last_name}
                disabled={props.disabled}
                />

                <label htmlFor="email">Contact Email</label>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="ex. example@example.com"
                onChange={props.changeHandler}
                defaultValue={props.user.email}
                disabled={props.disabled}
                aria-label="email"
                />

                <label htmlFor="company">Company</label>
                <input
                type="text"
                id="company"
                name="company"
                onChange={props.changeHandler}
                defaultValue={props.user.company}
                disabled={props.disabled}
                />
                {props.disabled ? null : <button type="submit">Submit</button>}
            </form>
            </fieldset>
    </ProjectCard>
  );
};

export default Project;
