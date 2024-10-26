import skills from '../data/skills.json'
import Skill from './Skill'

const Skills = () => {
    return (
    <section id='skills' className="pt-12 sm:pt-24 md:pt-24">
        <div className="min-h-screen xl:min-h-fit">

            <h2 className="text-white text-3xl pt-16 sm:pt-6 font-extrabold text-center sm:text-5xl xl:py-16">
                Skills
            </h2>
            <hr className='w-48 h-1 mx-auto my-4 bg-sky-600 border-0 rounded md:mt-10 md:mb-1 dark:bg-sky-700'></hr>

            <div className="container m-auto">

                <div className="pt-6 grid gap-6 grid-cols-1 px-3 sm:px-6 sm:grid-cols-2 md:grid-cols-3 xl:py-16">
                    <div className="max-w-sm rounded-lg px-3 sm:px-6 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <div className='text-center p-6 skill-icon'>
                            {/* hover:animate-pulse */}
                            <ion-icon name="desktop-outline"></ion-icon>
                        </div>
                        <h3 className="min-h-max text-white text-2xl font-bold text-center m-6 pb-3 border-b-2 border-sky-600">Full-Stack Web Development</h3>
                        <div className ="px-6 py-4 sm:p-3 text-center">
                            <p>Building responsive, efficient, and scalable applications from front to back, leveraging modern frameworks, RESTful APIs, and clean, maintainable code.</p>
                        </div>
                        
                    </div>
                    <div className="max-w-sm rounded-lg px-3 sm:px-6 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <div className='text-center p-6 skill-icon'>
                            {/* hover:animate-spin */}
                            <ion-icon name="cog-outline"></ion-icon>
                        </div>
                        <h3 className="min-h-max text-white text-2xl font-bold text-center  m-6 pb-3 border-b-2 border-sky-600">Automation, Testing, Pipeline</h3>
                        <div className ="px-6 py-4 sm:p-3 text-center">
                            <p>Dedicated to streamlining workflows—I&apos;ll gladly spend a week automating a task that takes only minutes, because efficiency is everything. Robust CI/CD pipelines ensure every release is fast and reliable.</p>
                        </div>
                    </div>
                    <div className="max-w-sm rounded-lg px-3 sm:px-6 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <div className='text-center p-6 skill-icon'>
                            {/* hover:animate-bounce */}
                            <ion-icon name="book-outline"></ion-icon>
                        </div>
                        <h3 className="min-h-max text-white text-2xl font-bold text-center  m-6 pb-3 border-b-2 border-sky-600">Infinitely curious, Tech agnostic</h3>
                        <div className ="px-6 py-4 sm:p-3 text-center">
                            <p>Constantly exploring new technologies and adaptable to various tech stacks, driven by a passion for problem-solving and continuous learning.</p>
                        </div>
                    </div>
                </div>

                <div className='py-3'>
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