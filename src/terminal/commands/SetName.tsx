import React, { useEffect } from 'react'


const SetName = ({setUsername, newName}) => {
    if (newName == "" || newName == null) {
        return "invalid username\n"
    } else {
        useEffect(() => {
            setUsername(newName);
          }, []);
    }
    return "";
};

export default SetName;