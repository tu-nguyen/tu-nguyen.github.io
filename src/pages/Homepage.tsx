import React from 'react'
import { Link } from 'react-router-dom';


function Homepage() {
    return (
        <>
        <section className='bg-black-700 h-screen xl:max-h-[1280px] grid place-items-center'>
            

            <div className='mx-auto px-6 sm:px-8 lg:px-10 flex flex-col items-center'>
                <div className='text-center text-white'>
                    <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl text-sky-600'>
                        Tu Nguyen
                    </h1>
                    <p className='py-8 text-2xl text-sky-600'>
                        Software Engineer
                    </p>
                    <div className="grid sm:grid-cols-1 gap-3 md:grid-cols-5 md:gap-20 text-lg pt-6 pb-20 ">
                        <a className="hover:text-sky-600" href="https://www.linkedin.com/in/tu-nguyen/">&lt;linkedin&gt;</a>
                        <a className="hover:text-sky-600" href="https://github.com/tu-nguyen">&lt;github&gt;</a>
                        <a className="hover:text-sky-600" href="mailto:tu.t.nguyen93@gmail.com">&lt;email&gt;</a>
                        <a className="hover:text-sky-600" href="https://calendly.com/tu-t-nguyen/quick-chat">&lt;meet&gt;</a>
                        <a className="text-sky-600" href="./Tu Nguyen Resume.pdf">&lt;resume&gt;</a>
                    </div>

                    
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 text-lg pt-10">
                        <div>
                            <Link to="/v2"><h4 className="text-white"><strong className="hover:text-sky-600" >click here</strong> to view v2</h4></Link>
                        </div>
                        <div>
                            <a href="https://tu-nguyen.github.io/terminal-portfolio/"><h4 className="text-sky-600" ><strong className="text-sky-600">click here</strong> to view terminal</h4></a>
                        </div>
                    </div>
                </div>
                <p className='my-4 text-white text-sm text-center absolute bottom-0'>Portfolio under construction (Updating to use <strong>React</strong> + <strong>Vite</strong> + <strong>Tailwind</strong>)</p> <br />
            </div>
        </section>
        </>
    )
}

export default Homepage;