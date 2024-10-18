

const Contact = () => {
    return (
        <section id='contact' className='pt-12 sm:pt-24 md:pt-24 md:pb-24 lg:pt-24 min-h-screen lg:min-h-[80vh]'>            
            <h1 className="text-white text-3xl pt-6 font-extrabold text-center sm:text-6xl">Contact</h1>
            <span className="hr"></span>

            <div className="container m-auto text-center">
                <div className="text-white p-16 sm:p-20 lg:p-24">
                    <p className="text-white text-center">Want to get in touch?</p><br />
                    <p>Send me an e-mail at <a href="mailto:tu.t.nguyen93@gmail.com">tu.t.nguyen93@gmail.com</a> and I will reply to you soon!</p>
                </div>

                <div className="text-white">
                    <div className="">
                        <a href="mailto:tu.t.nguyen93@gmail.com" className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-5 rounded">Say hello!</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact