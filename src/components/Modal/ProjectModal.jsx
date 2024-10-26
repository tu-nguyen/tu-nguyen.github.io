import React from "react";
import ReactDOM from 'react-dom';

function PreviewImg({ project }) {
    if (project.previewImageLink) {
        return project.previewImageLink
    } else {
        return project.imageLink
    }
}

function Demo({ project }) {
    if (project.demo) {
        return (
            <a href={project.demoLink} target="blank" className="hover:text-sky-600">
                &lt;demo&gt;
            </a>
        )
    } else {
        return (
            <p className="text-red-600">
                &lt;demo&gt;  
            </p>
        )
    }
}


const ProjectModal = ({ isShowing, hide, project }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay"/>
            <div className="modal-wrapper text-white" aria-modal aria-hidden tabIndex={-1} role="dialog" onClick={hide}>
                <div className="modal">
                    <div className="modal-header">
                        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <h2 className="py-3 sm:py-6 font-bold text-xl flex justify-center">
                        {project.title}
                    </h2>
                    <img className="mx-auto h-62 sm:h-72 w-auto object-fill rounded-t-xl" src={PreviewImg({project})}/>
                    <div className="p-6 text-md flex justify-center text-center h-auto">
                        <p className="px-3">{project.description}</p>
                    </div>

                    <div className="px-6 pt-4 pb-2">
                        {project.technologiesUsed.map((tech) => (
                        <span key={tech} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-sky-600 mr-2 mb-2 hover:text-sky-700 hover:bg-gray-600">
                            {tech}
                        </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="p-6 hover:text-sky-600"><a href={project.githubLink} target="blank">&lt;code&gt;</a></div>
                        <div className="p-6">{Demo({project})}</div>
                    </div>
                </div>
        </div>
    </React.Fragment>, document.body
  ) : null;

export default ProjectModal