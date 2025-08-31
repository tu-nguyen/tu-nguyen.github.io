/* eslint-disable react/prop-types */
import socials from '../data/socials.json'

const Hero = ({
    title = 'Tu Nguyen',
    subtitle = 'Software Engineer'
}) => {
    return (
    <section className='h-screen grid place-items-center text-white z-50 bg-black'>
        <div className='mx-auto px-6 lg:px-8 flex flex-col items-center '>
            <div className='text-center'>
                <h1 className='text-4xl font-extrabold sm:text-5xl md:text-6xl'>
                    { title }
                </h1>
                <p className='my-8 text-2xl'>
                    { subtitle }
                </p>
            </div>
            <div>
                <div className="grid place-items-center sm:grid-cols-5 md:gap-3  md:gap-20 text-lg md:pt-6 md:pb-20">
                    {socials.map((item) => (
                        <div key={item.name}>
                            <a
                            href={item.href}
                            className={`${item.res ? 'text-sky-600 hover:text-sky-700' : 'hover:text-sky-600'} active:text-sky-800 focus:outline-none focus:ring focus:ring-sky-300`}
                            target="_blank"
                            >
                                &lt;{item.name}&gt;
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="grid place-items-center grid-cols-1 text-lg pt-10 gap-3 md:gap-6">
                    {/* <div>
                        <a href="./v1/index.html"><h4 className="text-white"><strong className="hover:text-sky-700 active:text-sky-800 focus:outline-none focus:ring focus:ring-sky-300" >click here</strong> to view v1</h4></a>
                    </div> */}

                    <div>
                        <a href="https://tu-nguyen.github.io/terminal-portfolio/"><h4 className="text-sky-600"><strong className="text-sky-600 hover:text-sky-700 active:text-sky-800 focus:outline-none focus:ring focus:ring-sky-300">click here</strong> to view terminal</h4></a>
                    </div>
                </div>
            </div>

        </div>
    </section>
    )
}

export default Hero
