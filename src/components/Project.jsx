import React from 'react'

const Project = ({ project }) => {
  return (
    <div>
      {project.title}
      <br></br>
      {project.description}
    </div>
  )
}

export default Project
