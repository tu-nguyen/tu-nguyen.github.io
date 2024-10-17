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
    <section id= 'projects' className='pt-12 sm:pt-24 md:pt-24 lg:pt-24'>
      <h2 className='text-3xl pt-6 font-extrabold text-center sm:text-6xl'>
        Projects
      </h2>
      <span className='hr'></span>

      <div className="min-h-[75vh] sm:min-h-[60vh]">

      <div className="">
        <div id="filters" className="p-6 text-white text-center text-xl button-group">
          <button type="button" className={`button ${filterKey=='*' ? 'active' : ''}`} onClick={handleFilterKeyChange('*')}>All</button>
          <button type="button" className={`button ${filterKey=='python' ? 'active' : ''}`} onClick={handleFilterKeyChange('python')}>Python</button>
          <button type="button" className={`button ${filterKey=='django' ? 'active' : ''}`} onClick={handleFilterKeyChange('django')}>Django</button>
          <button type="button" className={`button ${filterKey=='react' ? 'active' : ''}`} onClick={handleFilterKeyChange('react')}>React</button>
          <button type="button" className={`button ${filterKey=='java' ? 'active' : ''}`} onClick={handleFilterKeyChange('java')}>Java</button>
          <button type="button" className={`button ${filterKey=='upcoming' ? 'active' : ''}`} onClick={handleFilterKeyChange('upcoming')}>Upcoming</button>
          <button type="button" className={`button ${filterKey=='other' ? 'active' : ''}`} onClick={handleFilterKeyChange('other')}>Other</button>
        </div>
      </div>
      

      <div className="filter-container px-6 md:px-36">
            {projects.map((project) => (
            <Project key={project.id} project={ project }/>
            ))}
      </div>

      </div>

      
      
    </section>
  )
}

export default Projects
