import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black pt-1 -my-32 sm:-my-26 md:-my-18 lg:-my-6'>
      <div className="text-white text-center px-3">
        <p className='mt-6'>Designed in <a href='https://www.figma.com/' className='font-bold text-sky-600 hover:text-sky-700'>Figma</a> and coded in <a href='https://code.visualstudio.com/' className='font-bold text-sky-600 hover:text-sky-700'>Visual Studio Code</a> by Tu Nguyen.</p>
        <p className='pb-6'>Built with <a href='https://react.dev/' className='font-bold text-sky-600 hover:text-sky-700'>React.js</a>, <a href='https://vitejs.dev/' className='font-bold text-sky-600 hover:text-sky-700'>Vite</a> and <a href='https://tailwindcss.com/' className='font-bold text-sky-600 hover:text-sky-700'>Tailwind CSS</a>, deployed with <a href='https://pages.github.com/' className='font-bold text-sky-600 hover:text-sky-700'>GitHub Pages</a>.</p>
      </div>
    </footer>
  )
}

export default Footer
