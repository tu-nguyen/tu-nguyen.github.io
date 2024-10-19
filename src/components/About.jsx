import React, { useState, useEffect } from 'react'
import profile from '../assets/images/profile.jpg'
import Skill from './Skill'
import skills from '../skills.json'

const connect = [
    { name: 'linkedin', href: 'https://www.linkedin.com/in/tu-nguyen/', icon: "logo-linkedin", res: false },
    { name: 'github', href: 'https://github.com/tu-nguyen', icon: "logo-github", res: false },
    { name: 'email', href: 'mailto:tu.t.nguyen93@gmail.com', icon: "mail-outline", res: false },
    { name: 'meet', href: 'https://calendly.com/tu-t-nguyen/quick-chat', icon: "calendar-outline", res: false },
    { name: 'resume', href: '#', icon: "document-text-outline", res: true },
]

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
        window.scrollY >= 300 ? setNavTop2(true) : setNavTop2(false);
      };
    
      useEffect(() => {
        window.addEventListener('scroll', changeNavTop2);
        return () => {
          window.removeEventListener('scroll', changeNavTop2);
        };
      }, []);

  return (
    <section id='about' className='py-12 sm:py-24 md:py-24 lg:py-24'>

        <div className="z-0  fixed top-0 left-0 w-28 h-screen grid place-items-center">

            {/* start of socials */}
            <div className={`transition-opacity ease-in duration-700 ${navTop ? "opacity-100" : "opacity-0"}`}>
                <div className="">
                
                    {connect.map((item) => (
                        <div key={item.name} {...(navTop2 ? { className: 'invisible sm:visible' } : {className: 'hidden'})} >
                            <a
                            
                            href={item.href}
                            > 
                                <div className={`sm:ml-6 rounded-md px-4 py-6 text-lg text-white hover:text-sky-600 ${item.res ? 'text-red-900 hover:text-red-700' : undefined}`}>
                                    <ion-icon name={item.icon} size="large"></ion-icon>
                                </div>
                            </a>
                        </div>
                    
                    ))}
                </div>
            </div>
            {/* end of socials */}
        </div> 
        

        <h1 className='text-white text-3xl pt-6 font-extrabold text-center sm:text-6xl'>About me</h1>

        <span className='hr'></span>
        <div className='container m-auto'>
            <div className="grid grid-cols-1 px-6 rounded-lg sm:grid-cols-2 sm:px-12 md:px-36 items-center">
                <div className="">
                    <img className='scale-0 sm:scale-75 rounded-full' src={profile} alt="" />
                </div>

                <div className="-mt-52 sm:mt-0">
                    <h2 className='text-white text-2xl font-bold text-center sm:text-left'>Hello, World!</h2>
                    <p className='text-white text-justify'>
                        I am an experienced <strong>Software Engineer</strong> based in Boston, specializing in automation, optimization, and <strong>full-stack development</strong>. Proficient in a variety of languages and frameworks including <strong>Python</strong>, <strong>Django</strong>, <strong>React.JS</strong>, and <strong>Node.JS</strong>, with a strong foundation in cloud technologies like <strong>AWS</strong>, <strong>Docker</strong>, and <strong>Kubernetes</strong>.
                    </p>
                </div>

                <div className='sm:col-span-2'>
                    <h3 className='text-white text-2xl font-bold text-center py-6 md:py-3'>Skills</h3>
                    <div className='grid grid-cols-2 md:grid-cols-4 text-white sm:grid-cols-4'>
                        {skills.map((skill) => (
                            <Skill key={skill.id} skill={ skill }/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
