import React from 'react'
import profile from '../assets/images/profile.jpg'
import Skill from './Skill'
import skills from '../skills.json'

const About = () => {
  return (
    <section id='about' className='bg-black-700 px-4 pt-36'>
        
        <div className='static'>
            <div className='absolute h-screen left-0 left-0 z-0 pt-32'>
                <ul className="">
                    <li className='pl-5 py-6'>
                        <a href="https://www.linkedin.com/in/tu-nguyen/" target="_blank" title="LinkedIn">
                            <svg viewBox="0 0 16 16" className="bg-black text-white fill-current h-8 inline-block duration-500 hover:scale-105">
                                <path fill="#ffffff" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/>
                            </svg>
                        </a>
                    </li>
                    <li className='pl-5 py-6'>
                        <a href="https://www.github.com/tu-nguyen" target="_blank" title="Github">
                            <svg viewBox="0 0 496 512" className="bg-black text-white fill-current h-8 inline-block duration-500 hover:scale-105">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                        </a>
                    </li>

                    <li className='pl-5 py-6'>
                        <a href="mailto:tu.t.nguyen93@gmail.com" title="Email">
                            <svg fill="#000000" viewBox="0 0 1920 1920" className="bg-black text-white fill-current h-8 inline-block duration-500 hover:scale-105">
                                <path d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fill-rule="evenodd"/>
                            </svg>
                        </a>
                    </li>

                    <li className='pl-5 py-6'>
                        <a href="https://calendly.com/tu-t-nguyen/quick-chat" title="Meet">
                        <svg viewBox="0 0 24 24" className="bg-black text-white fill-current h-8 inline-block duration-500 hover:scale-105">
                            <path d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </a>
                    </li>

                    <li className='pl-5 py-6'>
                        <a href="./Tu Nguyen Resume.pdf" title="Resume">
                            <svg fill="#000000" viewBox="0 0 256 256" className="bg-black text-white fill-current h-8 inline-block duration-500 hover:scale-105">
                                <g>
                                <path d="M227.6,58.3L179,9.6c-2.6-2.6-6.1-4-9.8-4H45.1c-11.5,0-20.8,9.3-20.8,20.8v203.3c0,11.5,9.3,20.8,20.8,20.8h165.8   c11.5,0,20.8-9.3,20.8-20.8V68C231.7,64.3,230.3,60.9,227.6,58.3z M221.5,229.6c0,5.8-4.8,10.6-10.6,10.6H45.1   c-5.8,0-10.6-4.8-10.6-10.6V26.4c0-5.8,4.8-10.6,10.6-10.6h124.2c1,0,1.9,0.4,2.6,1.1l48.6,48.6c0.7,0.7,1.1,1.6,1.1,2.6V229.6z"/>
                                <path d="M209.2,71.7h-32.9c-5.8,0-10.6-4.8-10.6-10.6V28.1c0-2.8-2.3-5.1-5.1-5.1c-2.8,0-5.1,2.3-5.1,5.1v32.9   c0,11.5,9.3,20.8,20.8,20.8h32.9c2.8,0,5.1-2.3,5.1-5.1S212,71.7,209.2,71.7z"/>
                                <path d="M105,143.5L105,143.5c2.2,11.1,12,19.2,23.3,19.2c11.3,0,21.1-8.1,23.3-19.2l2.9-14.9c1-7.1-1.2-14.2-5.9-19.6   c-4.7-5.4-11.5-8.5-18.6-8.5h-3.4c-7.1,0-13.9,3.1-18.6,8.5c-4.7,5.4-6.8,12.5-5.8,19.9L105,143.5z M115.6,115.7   c2.8-3.2,6.7-5,10.9-5h3.4c4.2,0,8.2,1.8,10.9,5c2.8,3.2,4,7.4,3.5,11.2l-2.8,14.7c-1.2,6.3-6.8,10.9-13.3,10.9   c-6.5,0-12-4.6-13.3-10.9l-2.8-14.4C111.6,123,112.9,118.8,115.6,115.7z"/>
                                <path d="M168.8,177.7l-22.9-8.1l-17.7,17.7l-17.7-17.7l-22.9,8.1c-3.5,1.2-6.1,4.2-6.8,7.8l-8.1,38.1h111l-8.1-38.1   C174.9,182,172.3,179,168.8,177.7z M85.3,213.4l5.5-25.8c0-0.2,0.1-0.3,0.3-0.3l16.8-6l20.4,20.4l20.4-20.4l16.8,6   c0.1,0.1,0.3,0.2,0.3,0.3l5.5,25.8H85.3z"/>
                                </g>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <h1 className='text-2xl font-extrabold text-white sm:text-5xl md:text-6xl text-center pt-3'>About me</h1>

        <span className='hr'></span>
        <div className='container-xl lg:container m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 px-4 rounded-lg'>
                <div className='px-4 rounded-lg shadow-md self-center items-center'>
                    <div className='mx-auto p-6 mb-6 rounded-lg shadow-md max-w-sm'>
                        <a className='mt-2 text-white'>
                            <img className='w-auto rounded-full' src={profile} alt="" />
                        </a>
                    </div>
                </div>
                <div className='py-6 rounded-lg shadow-md grid grid-rows-2 items-center lg:px-6'>
                    <div className='p-3 rounded-lg shadow-md'>
                        <h2 className='text-white text-2xl font-bold'>Hello, World!</h2>
                        <p className='mt-2 mb-2 text-white text-justify'>
                            I am an experienced <strong>Software Engineer</strong> based in Boston, specializing in automation, optimization, and <strong>full-stack development</strong>. Proficient in a variety of languages and frameworks including <strong>Python</strong>, <strong>Django</strong>, <strong>React.JS</strong>, and <strong>Node.JS</strong>, with a strong foundation in cloud technologies like <strong>AWS</strong>, <strong>Docker</strong>, and <strong>Kubernetes</strong>.
                        </p>
                    </div>
                    
                    <div className='py-2 rounded-lg shadow-md'>
                        <h3 className='text-white text-2xl font-bold'>Skills</h3>
                        <div className='grid grid-cols-1 md:grid-cols-4 text-white m-0'>
                            {skills.map((skill) => (
                                <Skill key={skill.id} skill={ skill }/>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
