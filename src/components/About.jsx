import React from 'react'

const About = () => {
  return (
    // <section className="bg-sky-700 py-40 mb-4">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
    //         <p className='my-4 text-white text-xl'>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque dolore quidem ratione error sapiente porro quos omnis ex ducimus, deserunt suscipit nam non doloribus provident fugit maiores, laborum quis?
    //         </p>
    //     </div>
    // </section>



<section className='py-4'>
        <div className='container-xl lg:container m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>About me</h1>
                <span className='hr'></span>
                <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
                    <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
                        <h2 className='text-white text-2xl font-bold'>Lorem</h2>
                        <p className='mt-2 mb-4 text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque dolore quidem ratione error sapiente porro quos omnis ex ducimus, deserunt suscipit nam non doloribus provident fugit maiores, laborum quis?
                        </p>

                    </div>
                </div>
                <div className='bg-indigo-100 p-6 rounded-lg shadow-md'>
                    <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
                        <h2 className='text-white text-2xl font-bold'>Ipsum</h2>
                        <p className='mt-2 mb-4 text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque dolore quidem ratione error sapiente porro quos omnis ex ducimus, deserunt suscipit nam non doloribus provident fugit maiores, laborum quis?
                        </p>
                        <p className='mt-2 mb-4 text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque dolore quidem ratione error sapiente porro quos omnis ex ducimus, deserunt suscipit nam non doloribus provident fugit maiores, laborum quis?
                        </p>
    
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
