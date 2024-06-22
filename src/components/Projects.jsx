import React from 'react'
import Project from './Project'
import projects from '../projects.json'

const Projects = () => {
  return (
    <section className='bg-sky-700 px-4 py-20'>
      <h2 className='text-3xl font-extrabold text-white sm:text-5xl md:text-6xl text-center'>
          Projects
        </h2>
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-white">
                {projects.reverse().map((project) => (
                <Project key={project.id} project={ project }/>
                ))}
            </div>
        </div>

    </section>
  )
}

export default Projects
