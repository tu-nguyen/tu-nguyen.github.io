import React, {  useEffect }from 'react'
import Project from './Project'
import projects from '../projects.json'
import $ from 'jquery'
import Isotope from 'isotope-layout'

const Projects = () => {
  // // init one ref to store the future isotope object
  // const isotope = React.useRef()
  // // store the filter keyword in a state
  // const [filterKey, setFilterKey] = React.useState('*')

  // // initialize an Isotope object with configs
  // React.useEffect(() => {
  //   isotope.current = new Isotope('.filter-container', {
  //     itemSelector: '.filter-item',
  //     layoutMode: 'fitRows',
  //   })
  //   // cleanup
  //   return () => isotope.current.destroy()
  // }, [])

  // // handling filter key change
  // React.useEffect(() => {
  //   filterKey === '*'
  //     ? isotope.current.arrange({filter: `*`})
  //     : isotope.current.arrange({filter: `.${filterKey}`})
  // }, [filterKey])

  // const handleFilterKeyChange = key => () => setFilterKey(key)

  ////

  useEffect(() => {

    $(document).ready(function(){

      console.log("test")
      let $btns = $('.projects .button-group button');
  
      $btns.click(function(e){
        console.log("click")
          $('.projects .button-group button').removeClass('active');
          e.target.classList.add('active');
  
          let selector = $(e.target).attr('data-filter');
          $('.projects .projects-gallery').isotope({
              filter:selector
          });
          // return false;
      })
  
  
      // $('.test-popup-link').magnificPopup({
      //     type:'image',
      //     gallery:{enabled:true},
      // });
  });

  }, [])

  return (
    <section id= 'projects' className='bg-black-700 px-4 py-20 projects'>
      <h2 className='text-3xl font-extrabold text-white sm:text-5xl md:text-6xl text-center pb-6 pt-3'>
          Projects
        </h2>

        {/* <div className="row">
          <div className="button-group text-center col-lg-12 col-md-12 col-sm-12 text-white px-3">
            <button type="button" className="active" data-filter="*">All</button>
            <button type="button" data-filter=".python">Python</button>
            <button type="button" data-filter=".javascript">Javascript</button>
            <button type="button" data-filter=".java">Java</button>
            <button type="button" data-filter=".upcoming">Upcoming</button>
            <button type="button" data-filter=".other">Other</button>
          </div>
        </div> */}

        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white projects-gallery">
                {projects.map((project) => (
                <Project key={project.id} project={ project }/>
                ))}
            </div>
        </div>

    </section>
  )
}

export default Projects
