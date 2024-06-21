import React from 'react'
import profile from '../assets/images/profile.jpg';

const About = () => {
  return (
    // <section className="bg-sky-700 py-40 mb-4">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
    //         <p className='my-4 text-white text-xl'>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque dolore quidem ratione error sapiente porro quos omnis ex ducimus, deserunt suscipit nam non doloribus provident fugit maiores, laborum quis?
    //         </p>
    //     </div>
    // </section>



    <section className='bg-sky-700 py-20 mb-4'>
    <h1 className='text-3xl font-extrabold text-white sm:text-5xl md:text-6xl text-center'>About me</h1>
    <span className='hr'></span>
        <div className='container-xl lg:container m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                <div className='bg-gray-100 p-6 rounded-lg shadow-md content-center'>
                    <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
                        <a className='mt-2 mb-4 text-white'>
                            <img className='w-auto rounded-full' src={profile} alt="" />
                        </a>
                    </div>
                </div>
                <div className='bg-indigo-100 p-6 rounded-lg shadow-md'>
                    <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
                        <h2 className='text-white text-2xl font-bold'>Hello, World!</h2>
                        <p className='mt-2 mb-4 text-white'>
                            sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in
                        </p>
                        <p className='mt-2 mb-4 text-white'>
                            donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo
                        </p>
    
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
