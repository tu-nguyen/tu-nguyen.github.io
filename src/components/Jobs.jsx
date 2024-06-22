import React from 'react'
import { useState, useEffect } from 'react'
import Job from './Job';
import jobs from '../jobs.json';

const Jobs = () => {


  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className='text-3xl font-extrabold text-white sm:text-5xl md:text-6xl text-center'>
          Experience
        </h2>
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            {jobs.reverse().map((job) => (
              <Job key={job.id} job={ job }/>
              ))}
        </div>
          
            
        
      </div>
    </section>
  )
}

export default Jobs
