import skills from '../data/skills.json'
import Skill from './Skill'

const Skills = () => {

    return (
        <section id='skills' className="pt-12 sm:pt-24 md:pt-24 lg:pt-24">
        <h2 className="text-white text-3xl pt-6 font-extrabold text-center sm:text-6xl">
          Skills
        </h2>
        <span className='hr'></span>
        <div className="container m-auto">
            <div></div>
            <div className="pt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div className="p-6 sm:px-12">
                    <h3 className="text-white text-2xl font-bold text-center">Software Development</h3>
                    <div className ="p-1">
                        <p>Experienced in various languages and tools: </p><br />
                        <p>Python, JavaScript, TypeScript</p>
                        <p>VS Code, PyCharm, Vim</p>
                    </div>
                    
                </div>
                <div className="p-6 sm:px-12">
                    <h3 className="text-white text-2xl font-bold text-center">Back-End Development</h3>
                    <div className ="p-1">
                        <p>Django is my goto Python web framework, but I&apos;ve also built using Flask, and FastAPI</p><br />
                        <p>Other back-end frameworks I&apos;ve used are NodeJS, and ExpressJS</p>
                    </div>
                </div>
                <div className="p-6 sm:px-12">
                    <h3 className="text-white text-2xl font-bold text-center">Front-End Development</h3>
                    <div className ="p-1">
                        <p>Developed web UIs using React, and VueJS.</p><br />
                        <p>Currently learning NextJS</p>
                    </div>
                </div>

            </div>
            <div className='pt-3 sm:col-span-2'>
                {/* <h3 className='text-white text-2xl font-bold text-center py-6 md:py-3'>Skills</h3> */}
                <div className='grid grid-cols-2 md:grid-cols-4 text-white sm:grid-cols-4'>
                    {skills.map((skill) => (
                        <Skill key={skill.id} skill={ skill }/>
                    ))}
                </div>
            </div>
      </div>
    </section>

    )

}

export default Skills