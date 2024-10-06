import React from 'react'

const Project = ({ project }) => {
    // let tect = job.skills.join("    ");
    
    return (
        <>
        <p>[{project.title}]</p><br />
        <p>&lt;{project.date}&gt;</p><br />
        <p>{project.description}</p><br />
        <p>Technologies Used: {project.technologiesUsed.join("   ")}</p><br />
        <p><a className="link" href={project.githubLink} target="_blank">Click here</a> to visit the github page</p><br />
    </>
  )
}

export default Project
