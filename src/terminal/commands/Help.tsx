import React from 'react'


const Help = ({ls=false}) => {
    function display_alt(ls) {
        if (ls) {
            return <><p>Did you mean <a className="link">help?</a></p><br /></>
        }
    }
    return (
        <>
        {display_alt(ls)}
        <p>Here are the available commands:</p><br />
        <div className="grid grid-flow-col auto-cols-max">
            <div>
                <p className="link">welcome</p><br />
                <p className="link">help</p><br />
                <p className="link">whoami</p><br />
                <p className="link">about</p><br />
                <p className="link">skills</p><br />
                <p className="link">work</p><br />
                <p className="link">projects</p><br />
                <p className="link">socials</p><br />
                <p className="link">meet</p><br />
                <p className="link">email</p><br />
                <p className="link">resume</p><br />
                <p className="link">theme</p><br />
                <p className="link">setname</p><br />
                <p className="link">clear</p><br />
                <p className="link">history</p><br />
                <p className="link">echo</p><br />
                <p className="link">exit</p><br />
            </div>
            <div>
                <pre>       - display welcome screen</pre>
                <pre>       - check available commands</pre>
                <pre>       - display current user</pre>
                <pre>       - about me</pre>
                <pre>       - display my skills</pre>
                <pre>       - view my work history</pre>
                <pre>       - view my projects</pre>
                <pre>       - check available socials commands</pre>
                <pre>       - set up time for quick chat</pre>
                <pre>       - send me an email</pre>
                <pre>       - view my resume</pre>
                <pre>       - display available theme commands</pre>
                <pre>       - change current user</pre>
                <pre>       - clear the terminal output</pre>
                <pre>       - view command history</pre>
                <pre>       - print out anything</pre>
                <pre>       - go back to main portfolio page</pre>
            </div>

        </div>
        
        </>
    );
};

export default Help;