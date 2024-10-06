import React from 'react'
import projects from '../../projects.json'
import Project from './Project';


const Projects = () => {
    return (
        <>
        {projects.map((project) => (
            <Project key={project.id} project={ project }/>
        ))}
        </>
    );
};

export default Projects;