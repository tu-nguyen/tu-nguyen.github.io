import React from 'react'
import { useEffect, useState } from 'react'

const Job = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isSmol, setIsSmol] = useState(window.innerWidth < 720 ? true : false)

  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsSmol(true)
    } else {
        setIsSmol(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  let description = job.description;
  let skills = job.skills.join("  •  ");

  if(!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  function JobItemA({alignment = '' }) {
    return (
        <div className={`mb-4 ${alignment}`}>
            <h2 className="text-sky-600 text-2xl font-extrabold">
                {job.title}
            </h2>
            <a className ="text-white hover:text-sky-600" href={`${job.link}`}>{job.company} </a>
            
            <div className="text-white mb-5 p-3">
                {description}
            </div>
            <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-sky-600 margin-bm-5 hover:text-sky-700">{ showFullDescription ? 'Less' : 'More'}</button>
        </div>
    )
  }

  function JobItemB({alignment = '' }) {
    return (
        <div className={`mb-4 ${alignment}`}>
            <div className="text-gray-600 my-2">
                {job.location}
            </div>
            
            <h3 className="text-gray-600 mb-6">{job.date}</h3>
            <div className="text-white">
                {job.skills.map((skill) => (
                    <span
                    key={skill}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-sky-600 mr-2 mb-2 hover:text-sky-700 hover:bg-gray-600"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
  }

  function JobCard({ job }) {
    if (isSmol) {
        return (
            <>
                <JobItemA title={job.title} company={job.company} skills={skills} alignment='text-center'/>
                <JobItemB location={job.location} date={job.date} alignment='text-center'/>
            </>
        )
    }

    if (job.id % 2 === 0) {
        return (
            <>
                <JobItemA title={job.title} company={job.company} skills={skills} alignment='text-right'/>
                <JobItemB location={job.location} date={job.date}/>
            </>
            )
    }
    return (
        <>
            <JobItemB location={job.location} date={job.date} alignment='text-right'/>
            <JobItemA title={job.title} company={job.company} skills={skills}/>
        </>
    )
  }

  return (
    <div className="rounded-xl shadow-md">
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg shadow-md rounded-xl ${isSmol ? '' : 'duration-500 hover:scale-105'} hover:shadow-xl`}>
            <JobCard job={job} />
        </div>
    </div>
  )
}

export default Job
