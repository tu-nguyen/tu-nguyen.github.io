import React, { useState } from 'react'
import ProjectModal from "./Modal/ProjectModal"
import useModal from './Modal/useModal';

const Project = ({ project }) => {
    const {isShowing, toggle} = useModal();
    
    // eslint-disable-next-line react/prop-types
    let tech_display = project.technologiesUsed.join("    ");
    let tech_filter = tech_display.toLowerCase();
    
    function DemoLink({demo = false }) {
        if (demo) {
            return (
            <a href={project.demoLink} target="blank">
                <ion-icon name="pulse"></ion-icon>
            </a>
        )} else {
            return (
            <>
                <div className='text-red-600 demo-icon'>
                    <ion-icon name="pulse"></ion-icon>
                </div>
            </>
            )
        }
    }
    
    return (
    <>
        <ProjectModal
        isShowing={isShowing}
        hide={toggle}
        project={project}
        />
        
        <div className={`py-6 w-auto shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl filter-item ${tech_filter}`}> 
            <div className="px-6 sm:px-3">
                <img
                    className="h-48 w-64 object-fit rounded-t-xl"
                    src={`${project.imageLink}`}
                    onClick={toggle}
                />

                <div className="px-6 pt-3 sm:px-3">
                    <h2 className='text-white font-bold text-lg text-center' onClick={toggle}>
                        {project.title}
                    </h2>

                    <div className="py-6 flex justify-center gap-6">
                        <div className="project-icon hover:text-sky-700">
                            <a href={project.githubLink} target="blank">
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                        </div>
                        <div className="project-icon hover:text-sky-700">
                            <DemoLink demo={project.demo} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Project
