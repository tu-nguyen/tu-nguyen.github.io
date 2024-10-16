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
          <svg viewBox="0 0 64 64" className="h-5" stroke-width="3" stroke="#0369A1" fill="none">
            <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"/>
            <path d="M37.86,51.1A47,47,0,0,1,32,56.7"/>
            <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"/>
            <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"/>
            <line x1="10.37" y1="19.9" x2="53.75" y2="19.9"/>
            <line x1="32" y1="6.99" x2="32" y2="56.7"/>
            <line x1="11.05" y1="45.48" x2="37.04" y2="45.48"/>
            <line x1="7.14" y1="32.46" x2="56.86" y2="31.85"/>
            <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"/>
          </svg> 
        </a>
      )

    } else {
      return (
        <>
          <svg viewBox="0 0 64 64" className="h-5" stroke-width="3" stroke="#FF0000" fill="none">
            <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"/>
            <path d="M37.86,51.1A47,47,0,0,1,32,56.7"/>
            <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"/>
            <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"/>
            <line x1="10.37" y1="19.9" x2="53.75" y2="19.9"/>
            <line x1="32" y1="6.99" x2="32" y2="56.7"/>
            <line x1="11.05" y1="45.48" x2="37.04" y2="45.48"/>
            <line x1="7.14" y1="32.46" x2="56.86" y2="31.85"/>
            <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"/>
          </svg> 
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

      <div className={`w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl filter-item ${tech_filter}`}> 
        
        <div className="px-4">
          
          <img className="h-48 w-72 object-cover rounded-t-xl" src={`${project.imageLink}`} onClick={toggle}/>
          
          <div className="px-4 py-3 h-58 w-72 grid grid-flow-row auto-rows-max">
            
            <h2 className='text-white pb-4 font-bold text-xl w-auto' onClick={toggle}>
              {project.title}
            </h2>
            
            <div className="pr-8">
                <div className="float-right px-2 ">
                  <DemoLink demo={project.demo} />
                </div>

                <div className="float-right px-2">
                  <a href={project.githubLink} target="blank">
                    <svg viewBox="0 0 496 512" className="text-white fill-current h-5">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>


    </>
    
  )
}

export default Project
