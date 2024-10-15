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
          <h2 className="py-4 font-bold text-xl flex items-center justify-center mx-auto">
            {project.title}
          </h2>
          <img className="mx-auto h-auto w-80 object-fill rounded-t-xl" src={PreviewImg({project})}/>
          <div className="p-3 text-lg flex items-center justify-center h-auto">
            <p className="p-5">{project.description}</p>
          </div>

          <div className="flex items-center justify-center pt-6">
            <div className="p-6 hover:text-sky-600"><a href={project.githubLink} target="blank">&lt;code&gt;</a></div>
            <div className="p-6">{Demo({project})}</div>
        </div>
        </div>
      </div>
    </React.Fragment>, document.body
  ) : null;

export default ProjectModal


// const ProjectModal = ({project, closeModal }) => {

//     return (
//         <div className={styles.modalBack} onClick={closeModal}>
//             <div className={styles.modalContainer}>
//                 <div>

//                     <h2>
//                         {project.title}
//                     </h2>

//                     <p>
//                         {project.description}
//                     </p>

//                 </div>

                


//             </div>
            


//         </div>
//     )

// }

// export default ProjectModal