import React from 'react'

const Project = ({ project }) => {
    return (
    <div className='bg-black-100 p-6 rounded-lg shadow-md'>
      <img src={`${project.imageLink}`}/>

      <h2 className='text-white text-xl font-bold'>
        {project.title}
      </h2>
      
      <br></br>
      <p className='mt-2 mb-4 text-white'>
        {project.description}
      </p>
      
    </div>
  )
}

export default Project
