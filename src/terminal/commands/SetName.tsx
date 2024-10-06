import React, { useEffect } from 'react'


const SetName = ({setUsername, newName}) => {
    if (newName == "" || newName == null) {
        return (
            <>
            <p>usage: setname [username]...</p>
            <pre>   [examples]</pre>
            <pre>       setname luffy</pre>
            </>
            )
    } else {
        useEffect(() => {
            setUsername(newName);
          }, []);
    }
    return "";
};

export default SetName;