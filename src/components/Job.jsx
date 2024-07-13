import React from 'react'
import { useState } from 'react'

const Job = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;
  let skills = job.skills.join("  •  ");

  if(!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  function JobItemA({alignment = '' }) {
    return (
        <div className={`mb-4 ${alignment}`}>
            <h2 className="text-xl font-bold">
                {job.title} - <a href={`${job.link}`} className="text-sky-500">{job.company} </a>
            </h2>
            <div className="text-sky-500">
                {skills}
            </div>
            <div className="mb-5">
                {description}
            </div>
            <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-sky-500 margin-bm-5 hover:text-sky-600">{ showFullDescription ? 'Less' : 'More'}</button>
        </div>
    )
  }

  function JobItemB({alignment = '' }) {
    return (
        <div className={`mb-4 ${alignment}`}>
            <div className="text-gray-600 my-2">
                {job.location}
            </div>
            <h3 className="text-sky-500 mb-2">{job.date}</h3>
        </div>
    )
  }

  function JobCard({ job }) {
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
    <div className="bg-black rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'">
            <JobCard job={job} />
        </div>
    </div>
  )
}

export default Job
