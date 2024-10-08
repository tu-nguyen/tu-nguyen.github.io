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
                    <div className="grid grid-cols-5 gap-20 text-lg pt-6 pb-20">
                        <a className="hover:text-sky-600" href="https://www.linkedin.com/in/tu-nguyen/">&lt;linkedin&gt;</a>
                        <a className="hover:text-sky-600" href="https://github.com/tu-nguyen">&lt;github&gt;</a>
                        <a className="hover:text-sky-600" href="mailto:tu.t.nguyen93@gmail.com">&lt;email&gt;</a>
                        <a className="hover:text-sky-600" href="https://calendly.com/tu-t-nguyen/quick-chat">&lt;meet&gt;</a>
                        <a className="text-sky-600" href="./Tu Nguyen Resume.pdf">&lt;resume&gt;</a>
                    </div>

                    
                    <div className="grid grid-cols-3 gap-3 text-lg pt-10">
                        <div>
                            <a href="./v1/index.html"><h4 className="text-white"><strong className="hover:text-sky-600" >click here</strong> to view v1</h4></a>
                        </div>
                        <div>
                            <Link to="/v2"><h4 className="text-white"><strong className="hover:text-sky-600" >click here</strong> to view v2</h4></Link>
                        </div>
                        <div>
                            <Link to="/terminal"><h4 className="text-sky-600" ><strong className="text-sky-600">click here</strong> to view terminal</h4></Link>
                        </div>
                    </div>
                </div>
                <h4 className='my-4 text-white text-md absolute bottom-0'>Portfolio under construction (Updating to use <strong>React</strong> + <strong>Vite</strong> + <strong>Tailwind</strong>)</h4> <br />
            </div>
        </section>
        </>
    )
}

export default Homepage;