import React from 'react'
import { Link } from 'react-router-dom';


function Homepage() {
    return (
        <>
        <section className='bg-black-700 h-screen xl:max-h-[1280px] grid place-items-center'>
            <div className='mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
                <div className='text-center'>
                    <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
                        Tu Nguyen
                    </h1>
                    <p className='my-2 text-2xl text-white'>
                        Software Engineer
                    </p>

                    <h4 className='my-4 text-white text-xl'>Portfolio under construction (Updating to use <strong>React</strong> + <strong>Vite</strong> + <strong>Tailwind</strong>)</h4> <br />
                    <div className="grid grid-cols-3 gap-3">
                        <a href="./v1/index.html"><h4 className="text-white"><strong>click here</strong> to view old version</h4></a>
                        <Link to="/v2"><h4 className="text-white"><strong>click here</strong> to view v2</h4></Link>
                        <Link to="/terminal"><h4 className="text-white"><strong>click here</strong> to view terminal version</h4></Link>
                    </div>
          
                </div>
            </div>
        </section>
        </>
    )
}

export default Homepage;