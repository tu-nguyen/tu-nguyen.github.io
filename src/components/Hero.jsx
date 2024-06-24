import React from 'react'

const Hero = ({
    title = 'Tu Nguyen',
    subtitle = 'Full Stack Software Engineer'
}) => {
  return (

    <section className='bg-black-700 py-60 mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            { title }
          </h1>
          <p className='my-2 text-2xl text-white'>
            { subtitle }
          </p>

          <h4 className='my-4 text-white text-xl'>Portfolio under construction (Updating to use <strong>React</strong> + <strong>Vite</strong> + <strong>Tailwind</strong>) <br /><a href="./v1/index.html"><strong>click here</strong></a> to view old version</h4>
        </div>
      </div>
    </section>
  )
}

// const Hero = () => {
//   return (
//     <section id='hero' className="bg-indigo-700 py-20 mb-4">
//         <div className='grid h-screen place-items-center'>
//           <div className='mx-auto text-white text-center'>
//             <h1 className='text-5xl'>Tu Nguyen</h1>
//             <h3 className='text-4xl'>Full Stack Software Engineer</h3>
//             <h4 className='text-2xl'>Portfolio under construction (Updating to use <strong>React</strong> + <strong>Vite</strong> + <strong>Tailwind</strong>) <br /><a href="./v1/index.html"><strong>click here</strong></a> to view old version</h4>
//           </div>
//         </div>
//       </section>
//   )
// }

export default Hero
