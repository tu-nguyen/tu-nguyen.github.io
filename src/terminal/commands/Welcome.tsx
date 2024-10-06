import React from 'react'


const Welcome = () => {
    return (
        <>
            <p>Welcome to my terminal portfolio.</p>
            <div>----------------------------</div>
            <div>
            This project's source code can be found in this project's{" "}
            <a className="link" href="https://github.com/tu-nguyen/tu-nguyen.github.io">
                GitHub repo
            </a>.<br />
            <p>To view v1 or v2 of the gui version type <span className="link">exit</span></p>
            </div>
            <div>----------------------------</div>
            <div>
                For a list of available commands, type <span className="link">help</span>.
            </div>
        </>
    );
};

export default Welcome;