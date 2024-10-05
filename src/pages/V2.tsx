import React from 'react'
import Hero from '../v2/components/Hero';
import Navbar from '../v2/components/Navbar';
import About from '../v2/components/About';
import Jobs from '../v2/components/Jobs';
import Projects from '../v2/components/Projects';
import Footer from '../v2/components/Footer';


function V2() {
    return (
        <>
          <Hero />
          <Navbar /> 
          <About />
          <Jobs />
          <Projects />
          <Footer />
    
          {/* <!-- isotope js library--> */}
          <script src="./assets/js/isotope/isotope.min.js"></script>
    
          {/* <!-- magific popup script file --> */}
          <script src="./assets/js/Magnific-Popup/dist/jquery.magnific-popup.min.js"></script>
    
          {/* <!-- custom js file --> */}
          {/* <script src="./assets/js/main.js"></script> */}
        </> 
      )
}

export default V2;