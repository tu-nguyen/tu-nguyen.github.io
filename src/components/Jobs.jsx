import React from 'react'
import { useState, useEffect } from 'react'
import Job from './Job'
import jobs from '../jobs.json'

const Jobs = () => {
  return (
    <section id='experience' className="bg-sky-700 px-4 py-20">
        <h2 className='text-3xl font-extrabold text-white sm:text-5xl md:text-6xl text-center pt-3'>
          Experience
        </h2>
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-3 text-white">
                {jobs.map((job) => (
                <Job key={job.id} job={ job }/>
                ))}
            </div>
      </div>
    </section>
  )
}

export default Jobs
