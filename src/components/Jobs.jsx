import React from 'react'
import { useState, useEffect } from 'react'
import Job from './Job'
import jobs from '../data/jobs.json'

const Jobs = () => {
  return (
    <section id='experience' className="pt-12 sm:pt-24 md:pt-24 lg:pt-24">
        <h2 className="text-white text-3xl pt-6 font-extrabold text-center sm:text-6xl">
          Experience
        </h2>
        <span className='hr'></span>
        <div className="container m-auto">
            <div className="grid px-6 sm:pt-12 pt-6 sm:px-12 md:px-36">
                {jobs.map((job) => (
                <Job key={job.id} job={ job }/>
                ))}
            </div>
      </div>
    </section>
  )
}

export default Jobs
