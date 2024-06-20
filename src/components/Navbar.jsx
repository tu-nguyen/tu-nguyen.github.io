import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const linkClass = ({ isActive }) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'

  return (
    <nav className="bg-sky-700 border-b border-sky-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <a href="" className={ linkClass }>Home</a>

            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <a href="#about" className={ linkClass }>About</a>
                <a href="#experience" className={ linkClass }>Experience</a>
                <a href="#skills" className={ linkClass }>Skills</a>
                <a href="#projects" className={ linkClass }>Projects</a>
                <a href="#education" className={ linkClass }>Education</a>

                <a href="#" className={ linkClass }>Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
