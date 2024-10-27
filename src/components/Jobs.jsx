import React from 'react'
import { useState, useEffect } from 'react'
import Job from './Job'
import jobs from '../data/jobs.json'

const Jobs = () => {
    return (
    <section id='experience' className="pt-12 sm:pt-24 md:pt-24 lg:pt-24 text-white bg-neutral-950">
        <div className="min-h-screen xl:min-h-fit">
            <h2 className="text-3xl pt-16 sm:pt-6 font-extrabold text-center sm:text-5xl xl:py-6">
                Experience
            </h2>
            <hr className='w-48 h-1 mx-auto my-4 bg-sky-600 border-0 rounded md:mt-10 md:mb-1 dark:bg-sky-700'></hr>
            <div className="container m-auto">
                <div className="grid px-6 sm:pt-12 pt-6 sm:px-12 md:px-36">
                    {jobs.map((job) => (
                        <Job key={job.id} job={ job }/>
                    ))}
                </div>
            </div>
        </div>
    </section>
    )
}

export default Jobs
