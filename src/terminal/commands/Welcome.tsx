import React from 'react'


const Welcome = () => {
    return (
        <>
            <p>Welcome to my terminal portfolio.</p>
            <div>----</div>
            <div>
            This project's source code can be found in this project's{" "}
            <a className="link" href="https://github.com/tu-nguyen/tu-nguyen.github.io">
                GitHub repo
            </a>
            .
            </div>
            <div>----</div>
            <div>
                For a list of available commands, type help.
            </div>
        </>
    );
};

export default Welcome;