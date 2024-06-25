import React from 'react'
import Project from './Project'
import projects from '../projects.json'

const Projects = () => {
  return (
    <section id= 'projects' className='bg-sky-700 px-4 py-20'>
      <h2 className='text-3xl font-extrabold text-white sm:text-5xl md:text-6xl text-center pb-6 pt-3'>
          Projects
        </h2>

        <div className="row">
          <div className="button-group text-center col-lg-12 col-md-12 col-sm-12 text-white">
            <button type="button" className="active" data-filter="*">All</button>
            <button type="button" data-filter=".python">Python</button>
            <button type="button" data-filter=".javascript">Javascript</button>
            <button type="button" data-filter=".java">Java</button>
            <button type="button" data-filter=".upcoming">Upcoming</button>
            <button type="button" data-filter=".other">Other</button>
          </div>
        </div>

        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                {projects.map((project) => (
                <Project key={project.id} project={ project }/>
                ))}
            </div>
        </div>

    </section>
  )
}

export default Projects
