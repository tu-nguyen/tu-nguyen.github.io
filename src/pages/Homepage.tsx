import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';



function Homepage() {
    return (
        <>
          <Hero />
          <Navbar /> 
          <About />
          <Jobs />
          <Projects />
          <Contact />
          <Footer />
    
          {/* <!-- isotope js library--> */}
          {/* <script src="./assets/js/isotope/isotope.min.js"></script> */}
    
          {/* <!-- magific popup script file --> */}
          {/* <script src="./assets/js/Magnific-Popup/dist/jquery.magnific-popup.min.js"></script> */}
    
          {/* <!-- custom js file --> */}
          {/* <script src="./assets/js/main.js"></script> */}
        </> 
      )
}

export default Homepage;