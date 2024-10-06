import React, { useEffect } from 'react'
import { link_map } from '../data/links'


const Contact = ({name}) => {
    function ContactLink({name}) {
        if (name == "" || name == null) {
            return (
                <>
                <p>Enter these as commands to automatically go to the link</p><br /><br />
                <p>email</p><br />
                <p>linkedin</p><br />
                <p>github</p><br />
                <p>meet</p><br />
                <p>resume</p><br />
                <br />
                <p>Email: tu.t.nguyen93@gmail.com</p><br />
                <p>Github: https://github.com/tu-nguyen</p><br />
                <p>LinkedIn: https://www.linkedin.com/in/tu-nguyen</p><br />
                <p>Calendly: add later</p><br />
                </>
            )
        } else if (name == "resume") {
            return <>{name} opening..<br /></>

        } else if (name == "email") {
            return <>opening {name} to send to tu.t.nguyen@gmail.com..<br /></>
        } else if (name in link_map) {
            return <>{name} link opening..<br /></>
            
        } else {
            return <>This social does not exist.<br /></>
        }
    }
    

    return (
        <>
        <p><ContactLink name={name}/></p>
        </>
    );
};

export default Contact;