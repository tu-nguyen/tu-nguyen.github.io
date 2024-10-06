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
        <p>welcome</p><br />
        <p>help</p><br />
        <p>whoami</p><br />
        <p>about</p><br />
        <p>skills</p><br />
        <p>work</p><br />
        <p>projects</p><br />
        <p>socials</p><br />
        <p>meet</p><br />
        <p>email</p><br />
        <p>resume</p><br />
        <p>theme</p><br />
        <p>setname</p><br />
        <p>clear</p><br />
        <p>history</p><br />
        <p>echo</p><br />
        <p>exit</p><br />
        </>
    );
};

export default Help;