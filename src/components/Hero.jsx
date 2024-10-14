import React from 'react'

const Hero = ({
    title = 'Tu Nguyen',
    subtitle = 'Software Engineer'
}) => {
  return (
    <section className='bg-black-700 h-screen xl:max-h-[1280px] grid place-items-center text-white'>
    {/* <h4 className='absolute top-0'>Portfolio under construction (Updating to use <strong>React</strong> + <strong>Vite</strong> + <strong>Tailwind</strong>)</h4> */}

      <div className='mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold sm:text-5xl md:text-6xl'>
            { title }
          </h1>
          <p className='my-8 text-2xl'>
            { subtitle }
          </p>

          <div className="grid sm:grid-cols-1 gap-3 md:grid-cols-5 md:gap-20 text-lg pt-6 pb-20 ">
              <a className="hover:text-sky-600" href="https://www.linkedin.com/in/tu-nguyen/">&lt;linkedin&gt;</a>
              <a className="hover:text-sky-600" href="https://github.com/tu-nguyen">&lt;github&gt;</a>
              <a className="hover:text-sky-600" href="mailto:tu.t.nguyen93@gmail.com">&lt;email&gt;</a>
              <a className="hover:text-sky-600" href="https://calendly.com/tu-t-nguyen/quick-chat">&lt;meet&gt;</a>
              <a className="text-sky-600" href="./Tu Nguyen Resume.pdf">&lt;resume&gt;</a>
          </div>

          <br />
          <div className="grid sm:grid-cols-1 md:grid-cols-2 text-lg pt-10">
            <div>
                <a href="./v1/index.html"><h4 className="text-white"><strong className="hover:text-sky-600" >click here</strong> to view v1</h4></a>
            </div>

            <div>
                <a href="https://tu-nguyen.github.io/terminal-portfolio/"><h4 className="text-sky-600" ><strong className="text-sky-600">click here</strong> to view terminal</h4></a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero
