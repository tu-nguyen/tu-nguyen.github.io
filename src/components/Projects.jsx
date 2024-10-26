import React, {  useEffect }from 'react'
import Project from './Project'
import projects from '../data/projects.json'
import Isotope from 'isotope-layout'




const Projects = () => {
    // init one ref to store the future isotope object
    const isotope = React.useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState('*')

    // initialize an Isotope object with configs
    React.useEffect(() => {
        isotope.current = new Isotope('.filter-container', {
            itemSelector: '.filter-item',
            layoutMode: 'fitRows',
        })
        // cleanup
        return () => isotope.current.destroy()
    }, [])
  
    // handling filter key change
    React.useEffect(() => {
        filterKey === '*'
        ? isotope.current.arrange({filter: `*`})
        : isotope.current.arrange({filter: `.${filterKey}`})
    }, [filterKey])
  
    const handleFilterKeyChange = key => () => setFilterKey(key)

    const button_style = "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    
    return (
    <section id= 'projects' className='pt-12 sm:pt-24 md:pt-24 lg:pt-24'>
        <div className="min-h-screen xl:min-h-fit">
            <h2 className='text-white text-3xl pt-6 font-extrabold text-center sm:text-5xl xl:py-16'>
                Projects
            </h2>
            <span className='hr'></span>
            <div className="container m-auto">
                
                <div className="sm:pt-6">
                    <div id="filters" className="p-6 text-center button-group">
                        <button type="button" className={`${button_style}  ${filterKey=='python' ? 'active' : ''}`} onClick={handleFilterKeyChange('python')}>Python</button>
                        <button type="button" className={`${button_style}  ${filterKey=='javascript' ? 'active' : ''}`} onClick={handleFilterKeyChange('javascript')}>JavaScript</button>
                        <button type="button" className={`${button_style}  ${filterKey=='java' ? 'active' : ''}`} onClick={handleFilterKeyChange('java')}>Java</button>
                        <button type="button" className={`${button_style}  ${filterKey=='sql' ? 'active' : ''}`} onClick={handleFilterKeyChange('sql')}>SQL</button>
                        {/* <button type="button" className={`${button_style}  ${filterKey=='upcoming' ? 'active' : ''}`} onClick={handleFilterKeyChange('upcoming')}>Upcoming</button> */}
                        {/* <button type="button" className={`${button_style}  ${filterKey=='other' ? 'active' : ''}`} onClick={handleFilterKeyChange('other')}>Other</button> */}
                        <br />
                        <button type="button" className={`${button_style}  ${filterKey=='django' ? 'active' : ''}`} onClick={handleFilterKeyChange('django')}>Django</button>
                        <button type="button" className={`${button_style}  ${filterKey=='react' ? 'active' : ''}`} onClick={handleFilterKeyChange('react')}>React</button>
                        <button type="button" className={`${button_style}  ${filterKey=='nextjs' ? 'active' : ''}`} onClick={handleFilterKeyChange('nextjs')}>NextJS</button>
                        <button type="button" className={`${button_style}  ${filterKey=='nodejs' ? 'active' : ''}`} onClick={handleFilterKeyChange('nodejs')}>NodeJS</button>
                        <br />
                        {/* <button type="button" className={`${button_style}  ${filterKey=='web' ? 'active' : ''}`} onClick={handleFilterKeyChange('web')}>Web</button> */}
                        {/* <button type="button" className={`${button_style}  ${filterKey=='mobile' ? 'active' : ''}`} onClick={handleFilterKeyChange('mobile')}>Mobile</button> */}
                        {/* <button type="button" className={`${button_style}  ${filterKey=='app' ? 'active' : ''}`} onClick={handleFilterKeyChange('app')}>App</button> */}
                        {/* <button type="button" className={`${button_style}  ${filterKey=='script' ? 'active' : ''}`} onClick={handleFilterKeyChange('script')}>Script</button> */}
                        <br />
                        <button type="button" className={`${button_style} ${filterKey=='*' ? 'active' : ''}`} onClick={handleFilterKeyChange('*')}>All</button>
                    </div>

                    <div className="filter-container p-6 sm:pb-12 sm:pl-12 md:pl-24">
                        {projects.map((project) => (
                            <Project key={project.id} project={ project }/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Projects
