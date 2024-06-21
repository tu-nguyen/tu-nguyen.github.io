import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Jobs from './components/Jobs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='container mx-auto'>
      {/* <Navbar />  */}
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Jobs /> */}
      {/* <Footer /> */}

      <div>
        <div className='grid h-screen place-items-center'>
          <div className='mx-auto text-white text-center'>
            <h1 className='text-5xl'>Tu Nguyen</h1>
            <h3 className='text-4xl'>Full Stack Software Engineer</h3>
            <h4 className='text-2xl'>Portfolio under construction (Updating to use <strong>React</strong> + <strong>Vite</strong> + <strong>Tailwind</strong>) <br /><a href="./v1/index.html"><strong>click here</strong></a> to view old version</h4>
          </div>
        </div>
      </div>

    </div> 
  )
}

export default App