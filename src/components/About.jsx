import React, { useState, useEffect } from 'react'
import profile from '../assets/images/profile.jpg'
import Skill from './Skill'
import skills from '../data/skills.json'
import socials from '../data/socials.json'


const About = () => {
    const [navTop, setNavTop] = useState(false);
    const [navTop2, setNavTop2] = useState(false);

    const changeNavTop = e => {
        window.scrollY >= 700 ? setNavTop(true) : setNavTop(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavTop);
        return () => {
            window.removeEventListener('scroll', changeNavTop);
        };
    }, []);

    const changeNavTop2 = e => {
        window.scrollY >= 100 ? setNavTop2(true) : setNavTop2(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavTop2);
        return () => {
            window.removeEventListener('scroll', changeNavTop2);
        };
    }, []);
    
    return (
    <section id='about' className='py-6 sm:pb-0 md:pt-12 lg:pt-24 lg:pb-12 text-white bg-neutral-900'>

        {/* start of socials */}
        <div className="z-40 fixed top-0 left-0 w-2 sm:w-9 md:w-28 min-h-screen grid place-items-center">
            <div className={`w-2 sm:w-9 md:w-auto transition-opacity ease-in duration-100 ${navTop ? "opacity-100" : "opacity-0"}`}>
                <div className="">
                    {socials.map((item) => (
                        <div key={item.name} {...(navTop2 ? { className: 'invisible sm:visible' } : {className: 'hidden'})}>
                            <a href={item.href} target="_blank">  
                                <div className={`sm:ml-6 rounded-md px-4 py-6 text-lg ${item.res ? 'text-sky-600 hover:text-sky-700' : 'hover:text-sky-600'}`}>
                                    <ion-icon name={item.icon} size="large"></ion-icon>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div> 
        {/* end of socials */}
        
        <h1 className='text-white text-3xl pt-20 sm:pt-6 font-extrabold text-center sm:text-5xl xl:py-16'>About me</h1>
        <hr className='w-48 h-1 mx-auto my-4 bg-sky-600 border-0 rounded md:mt-10 md:mb-1 dark:bg-sky-700'></hr>
        
        <div className='container m-auto'>
            {/** grid grid-cols-1 px-3 rounded-lg md:grid-cols-2 md:px-6 items-center*/}
            <div className="relative overflow-hidden -mt-20 sm:-mt-12 xl:px-36">
                {/** sm:p-3 md:pt-6 sm:-mt-24 md:mt-0*/}
                <div className="profile-div sm:-mr-32 sm:-ml-24 sm:float-left">
                    {/**sm:scale-50 md:scale-[0.6] */}
                    <img className='scale-0 rounded-full sm:scale-50 lg:scale-[0.45] xl:scale-[0.4]' src={profile} alt="" />
                </div>

                {/** -mt-80 sm:-mt-36 md:mt-0 px-6 sm:mt-1 md:mt-6*/}
                <div className="px-6 -mt-80 sm:-mt-0 xl:mt-12">
                    <br />
                    <h2 className='text-2xl sm:text-4xl font-bold text-center sm:text-left text-sky-700 sm:pt-32'>Hello, World! I&apos;m Tu</h2>
                    <br />
                    <p>
                        I am a Boston-based <strong className='text-sky-700'>Software Engineer</strong> with expertise in automation, optimization, and <strong className='text-sky-700'>full-stack web development</strong>, experienced in building projects from concept to production.
                    </p>
                    <br />
                    <p>
                        My technical background spans a variety of languages and frameworks, including <strong className='text-sky-700'>Python</strong>, <strong className='text-sky-700'>Django</strong>, <strong className='text-sky-700'>JavaScript</strong>, <strong className='text-sky-700'>TypeScript</strong>, <strong className='text-sky-700'>React</strong>, and <strong className='text-sky-700'>Node.js</strong>, along with a strong foundation in cloud infrastructure like <strong className='text-sky-600'>AWS</strong>, <strong className='text-sky-700'>Docker</strong>, and <strong className='text-sky-700'>Kubernetes</strong>.
                    </p>
                    <br />
                    <p>
                        I&apos;ve been interested in tinkering both software and hardware since the days of <strong className='text-sky-700'>LAMP</strong> stack, during a time when <strong className='text-sky-700'>Ubuntu</strong> used to mail physical disks for free upon request. This blend of hands-on curiosity and professional experience fuels my work today as I bring solutions from idea to implementation.
                    </p>
                </div>

            </div>
        </div>
    </section> 
    )
}

export default About
