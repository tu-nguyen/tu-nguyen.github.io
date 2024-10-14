

const Contact = () => {
    return (
        <section id='contact' className='bg-black-700 px-4 py-20 text-white'>
            
                <h1 className="text-2xl font-extrabold text-white sm:text-5xl md:text-6xl text-center pb-6">Contact</h1>
                <span className="hr"></span>

                <div className="container-xl lg:container m-auto">
                    <div className="text-center p-20">
                        <p className="text-center">Want to get in touch?</p><br />
                        <p>Send me an e-mail at <a href="mailto:tu.t.nguyen93@gmail.com">tu.t.nguyen93@gmail.com</a> and I will reply to you soon!</p>
                </div>

                <div className="rounded-md p-6">
                    <div className="text-center email">
                    <a href="mailto:tu.t.nguyen93@gmail.com" className="bg-sky-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Say hello!</a>
                    </div>
                </div>

                </div>
        </section>
    )
}

export default Contact