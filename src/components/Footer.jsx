import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black-700 -my-32 sm:-my-28'>
      <div className="text-center">
        <p className='mt-6'>Designed in <a href='https://www.figma.com/' className='font-bold'>Figma</a> and coded in <a href='https://code.visualstudio.com/' className='font-bold'>Visual Studio Code</a> by Tu Nguyen.</p>
        <p className='mb-6'>Built with <a href='https://react.dev/' className='font-bold'>React.js</a>, <a href='https://vitejs.dev/' className='font-bold'>Vite</a> and <a href='https://tailwindcss.com/' className='font-bold'>Tailwind CSS</a>, deployed with <a href='https://pages.github.com/' className='font-bold'>GitHub Pages</a>.</p>
      </div>
    </footer>
  )
}

export default Footer
