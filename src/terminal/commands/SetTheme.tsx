import React, { useEffect } from 'react'


const SetTheme = ({setTheme, newTheme}) => {
    if (newTheme == "" || newTheme == null) {
        return "invalid theme\n"
    } else {
        useEffect(() => {
            setTheme(newTheme);
          }, []);
    }
    return "";
};

export default SetTheme;