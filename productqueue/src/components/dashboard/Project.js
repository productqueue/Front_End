import React from 'react';
import {CircleBtn, ProjectCard} from '../../styles';

const Project = props => {


    return(
        <ProjectCard>
            <h4>{props.project.project_name}</h4>
            <CircleBtn>X</CircleBtn><CircleBtn>O</CircleBtn>
        </ProjectCard>
    )
    
}

export default Project;