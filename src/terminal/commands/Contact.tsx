import React, { useEffect } from 'react'
import { link_map } from '../data/links'


const Contact = ({name}) => {
    
      
    function ContactLink({name}) {
        if (name == "" || name == null) {
            return (
                <>
                list of socials cmd...
                </>
            )
        } else if (name == "resume") {
            return <>{name} opening..</>

        } else if (name == "email") {
            return <>opening {name} to send to tu.t.nguyen@gmail.com..</>
        } else if (name in link_map) {
            // useEffect(() => {
            //     setLink(link_map[name]);
            //   }, []);

            return <>{name} profile opening..</>
            
        } else {
            return <>This social does not exist.</>
        }
    }
    

    return (
        <>
        <p><ContactLink name={name}/></p>
        </>
    );
};

export default Contact;