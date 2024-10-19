/* eslint-disable react/prop-types */
import React from 'react'

const Hero = ({
    title = 'Tu Nguyen',
    subtitle = 'Software Engineer'
}) => {
  return (
    <section className='h-screen grid place-items-center text-white z-50'>
      <div className='mx-auto px-6 lg:px-8 flex flex-col items-center '>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold sm:text-5xl md:text-6xl'>
            { title }
          </h1>
          <p className='my-8 text-2xl'>
            { subtitle }
          </p>
        </div>
        <div>
          <div className="grid place-items-center sm:grid-cols-5 md:gap-3  md:gap-20 text-lg md:pt-6 md:pb-20">
              <a className="hover:text-sky-600" href="https://www.linkedin.com/in/tu-nguyen/">&lt;linkedin&gt;</a>
              <a className="hover:text-sky-600" href="https://github.com/tu-nguyen">&lt;github&gt;</a>
              <a className="hover:text-sky-600" href="mailto:tu.t.nguyen93@gmail.com">&lt;email&gt;</a>
              <a className="hover:text-sky-600" href="https://calendly.com/tu-t-nguyen/quick-chat">&lt;meet&gt;</a>
              <a className="text-sky-600" href="./Tu Nguyen Resume.pdf">&lt;resume&gt;</a>
          </div>
        </div>

        <div>
          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 text-lg pt-10 gap-3 md:gap-6">
            <div>
                <a href="./v1/index.html"><h4 className="text-white"><strong className="hover:text-sky-600" >click here</strong> to view v1</h4></a>
            </div>

            <div>
                <a href="https://tu-nguyen.github.io/terminal-portfolio/"><h4 className="text-sky-600"><strong className="text-sky-600">click here</strong> to view terminal</h4></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
