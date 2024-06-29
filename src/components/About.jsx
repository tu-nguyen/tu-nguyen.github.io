import React from 'react'
import profile from '../assets/images/profile.jpg'
import Skill from './Skill'
import skills from '../skills.json'

const About = () => {
  return (
    // <section className="bg-sky-700 py-40 mb-4">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
    //         <p className='my-4 text-white text-xl'>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque dolore quidem ratione error sapiente porro quos omnis ex ducimus, deserunt suscipit nam non doloribus provident fugit maiores, laborum quis?
    //         </p>
    //     </div>
    // </section>



    <section id='about' className='bg-sky-700 px-4 py-20'>
    <h1 className='text-3xl font-extrabold text-white sm:text-5xl md:text-6xl text-center pt-3'>About me</h1>
    <span className='hr'></span>
        <div className='container-xl lg:container m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                <div className='bg-gray-100 p-6 rounded-lg shadow-md self-center items-center'>
                    <div className='mx-auto bg-gray-100 p-6 rounded-lg shadow-md max-w-sm'>
                        <a className='mt-2 mb-4 text-white'>
                            <img className='w-auto rounded-full' src={profile} alt="" />
                        </a>
                    </div>

                    <div className='bg-sky-700 p-6 rounded-sm shadow-md'>
                        <div >
                            <ul className="grid grid-cols-1 md:grid-cols-3 text-white text-center m-0">
                            <li className='inline-block'>
                                <a href="mailto:tu.t.nguyen93@gmail.com" title="Email">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-white h-8 inline-block">
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                                </svg>
                                </a>
                            </li>
                            <li className='inline-block'>
                                <a href="https://www.github.com/tu-nguyen" target="_blank" title="Github">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="fill-white h-8 inline-block">
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                    </svg></a>
                            </li>
                            <li className='inline-block'>
                                <a href="https://www.linkedin.com/in/tu-nguyen/" target="_blank" title="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-white h-8 inline-block">
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                                </svg>
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-indigo-100 py-6 rounded-lg shadow-md grid grid-rows-2 items-center lg:px-6'>
                    <div className='bg-gray-100 p-3 rounded-lg shadow-md'>
                        <h2 className='text-white text-2xl font-bold'>Hello, World!</h2>
                        <p className='mt-2 mb-2 text-white'>
                            I'm an experienced <strong>Software Engineer</strong> based in Boston, specializing in automation, optimization, and <strong>full-stack development</strong>. Skilled in collaborating with cross-functional teams to design and implement innovative solutions. Proficient in a variety of languages and frameworks including <strong>Python</strong>, <strong>Django</strong>, <strong>React</strong>, and <strong></strong>NodeJs, with a strong foundation in cloud technologies like <strong>AWS</strong> and <strong>Docker</strong>.
                        </p>
                        <p className='mt-2 text-white'>
                        Bachelor of Science in Computer Science from the University of Massachusetts Boston, where I gained a strong foundation in software engineering principles, best practices, and back-end technologies, including <strong>C</strong>, <strong>C++</strong>, and <strong>Java</strong>.
                        </p>
                    </div>
                    
                    <div className='bg-gray-100 py-2 rounded-lg shadow-md'>
                        <h3 className='text-white text-2xl font-bold text-center'>Skills</h3>
                        <div className='grid grid-cols-1 md:grid-cols-4 text-white m-0'>
                            {skills.map((skill) => (
                                <Skill key={skill.id} skill={ skill }/>
                                ))}

                            {/* <div className='text-white'>test</div>
                            <div className='text-white'>test</div>
                            <div className='text-white'>test</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
