import skills from '../data/skills.json'
import Skill from './Skill'

const Skills = () => {

    return (
        <section id='skills' className="pt-12 sm:pt-24 md:pt-24 lg:pt-24">
            <div className="min-h-screen grid place-items-center bg-black">

                <h2 className="text-white text-3xl pt-12 sm:pt-6 font-extrabold text-center sm:text-5xl">
                    Skills
                </h2>
                <span className='hr'></span>
                <div className="container m-auto">

                    <div className="pt-6 sm:-mt-42 grid gap-6 grid-cols-1 px-3 sm:px-6 sm:grid-cols-2 md:grid-cols-3">

                        <div className="max-w-sm rounded-lg px-3 sm:px-6 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                            <div className='text-center pt-6'>
                                <ion-icon name="desktop-outline"></ion-icon>
                            </div>
                            <h3 className="min-h-max text-white text-2xl font-bold text-center m-6 pb-3 border-b-2 border-sky-600">Full-Stack Web Development</h3>
                            <div className ="px-6 py-4 sm:p-3">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio hic nulla odit sed minima nostrum provident.</p>
                            </div>
                            
                        </div>
                        <div className="max-w-sm rounded-lg px-3 sm:px-6 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                            <div className='text-center pt-6'>
                                <ion-icon name="cog-outline"></ion-icon>
                            </div>
                            <h3 className="min-h-max text-white text-2xl font-bold text-center  m-6 pb-3 border-b-2 border-sky-600">Automation, Testing, Pipeline</h3>
                            <div className ="px-6 py-4 sm:p-3">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio hic nulla odit sed minima nostrum provident.</p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded-lg px-3 sm:px-6 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                            <div className='text-center pt-6'>
                                <ion-icon name="book-outline"></ion-icon>
                            </div>
                            <h3 className="min-h-max text-white text-2xl font-bold text-center  m-6 pb-3 border-b-2 border-sky-600">Infinitely curious, Tech agnostic</h3>
                            <div className ="px-6 py-4 sm:p-3">
                                <p>I wont deny that I gravitate towards familiar technologies, and have biased to the tools, languages and frameworks I use</p>
                            </div>
                        </div>
                    </div>

                    <div className='pt-3'>
                        {/* <h3 className='text-white text-2xl font-bold text-center py-6 md:py-3'>Skills</h3> */}
                        <div className='p-3 sm:p-6 grid grid-cols-2 md:grid-cols-4 text-white sm:grid-cols-4'>
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

export default Skills