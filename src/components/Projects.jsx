import React, {  useEffect }from 'react'
import Project from './Project'
import projects from '../projects.json'
// import $ from 'jquery'
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


  return (
    <section id= 'projects' className='bg-black-700 px-4 pt-36 projects min-h-screen'>
      <h2 className='text-2xl font-extrabold text-white sm:text-5xl md:text-6xl text-center pb-6 pt-3'>
        Projects
      </h2>
      <span className='hr'></span>

      <div className="">
        <div id="filters" className="my-6 text-white pb-2 text-center button-group">
          <button type="button" className={`button ${filterKey=='*' ? 'active' : ''}`} onClick={handleFilterKeyChange('*')}>All</button>
          <button type="button" className={`button ${filterKey=='python' ? 'active' : ''}`} onClick={handleFilterKeyChange('python')}>Python</button>
          <button type="button" className={`button ${filterKey=='django' ? 'active' : ''}`} onClick={handleFilterKeyChange('django')}>Django</button>
          <button type="button" className={`button ${filterKey=='react' ? 'active' : ''}`} onClick={handleFilterKeyChange('react')}>React</button>
          <button type="button" className={`button ${filterKey=='java' ? 'active' : ''}`} onClick={handleFilterKeyChange('java')}>Java</button>
          <button type="button" className={`button ${filterKey=='upcoming' ? 'active' : ''}`} onClick={handleFilterKeyChange('upcoming')}>Upcoming</button>
          <button type="button" className={`button ${filterKey=='other' ? 'active' : ''}`} onClick={handleFilterKeyChange('other')}>Other</button>
        </div>
      </div>

      <div className="h-fit mx-auto grid grid-cols-1 justify-items-center justify-center  lg:grid-cols-4 px-3 md:grid-cols-3 gap-y-20 gap-x-14 mt-10 mb-5 filter-container">
            {projects.map((project) => (
            <Project key={project.id} project={ project }/>
            ))}
      </div>

    </section>
  )
}

export default Projects
