import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png';

const Navbar = () => {
  // const linkClass = ({ isActive }) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
  const linkClass = 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'

  const test = ({ isActive }) => {
    isActive ? 'a' : 'b'
  }
  console.log(test)

  return (
    <nav className='sticky top-0 bg-sky-700 border-b border-sky-700'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <a href='#' className='flex flex-shrink-0 items-center mr-4'>
              <img className='h-10 w-auto' src={ logo } alt='React Jobs'/><span className='hidden md:block text-white text-2xl font-bold ml-2'>Home</span>
            </a>

            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <a href='#about' className={ linkClass }>About</a>
                <a href='#experience' className={ linkClass }>Experience</a>
                {/* <a href='#skills' className={ linkClass }>Skills</a> */}
                <a href='#projects' className={ linkClass }>Projects</a>
                {/* <a href='#education' className={ linkClass }>Education</a> */}

                <a href='#' className='text-white bg-sky-900 hover:bg-gray-900 hover:text-sky rounded-md px-3 py-2'>Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
