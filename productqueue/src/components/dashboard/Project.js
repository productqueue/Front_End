import React from 'react';
import { Link } from 'react-router-dom';
import {ProjectCard, Button} from "../../styles";

const Project = props => {
  const data = JSON.parse(localStorage.getItem('data'))
  console.log('PPPPPPPPPPPPPPPPPPPP',props)
  return (
    <ProjectCard>
      
      <div>
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
      </div>
      
      <Link to={{ pathname: `/edit-project/${ data.role === 'admin' ? props.project.id : props.project.user_id }`,
        state: { project: props.project }}}><Button>Edit</Button></Link>
    </ProjectCard>
  );
};

export default Project;
