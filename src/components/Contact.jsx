

const Contact = () => {
    return (
    <section id='contact' className='pt-12 sm:pt-24 md:pt-24 md:pb-24 lg:pt-24 min-h-screen lg:min-h-[60vh] bg-neutral-950'>            
        <h1 className="text-white text-3xl pt-6 font-extrabold text-center sm:text-5xl">Contact</h1>
        <span className="hr"></span>

        <div className="container m-auto">
            <div className="text-white text-center sm:text-lg p-16 lg:p-24">
                <p>Have an exciting project you need help with?</p><br />
                <p>I’m always open to discuss, send me an email or set up a meeting!</p>
                {/* <p>Send me an e-mail at <a href="mailto:tu.t.nguyen93@gmail.com" className="text-sky-600 hover:text-sky-700">tu.t.nguyen93@gmail.com</a> and I will reply to you soon!</p> */}
            </div>

            <div className="flex justify-center p-6 sm:px-24 lg:px-36 text-white text-center sm:text-lg">
                <div className="px-3 sm:px-6">
                    <a
                    href="mailto:tu.t.nguyen93@gmail.com"
                    className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-5 rounded-full"
                    >
                        Send an email!
                    </a>
                </div>
                <div className="px-3 sm:px-6">
                    <a
                    href="https://calendly.com/tu-t-nguyen/quick-chat"
                    className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-5 rounded-full"
                    target="_blank"
                    >
                        Set a meeting!
                    </a>
                </div>
            </div>

        </div>
    </section>
    )
}

export default Contact