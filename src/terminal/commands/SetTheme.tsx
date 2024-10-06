import React, { useEffect } from 'react'


const SetTheme = ({setTheme, arg, newTheme}) => {
    if (arg == "" || arg == null) {
        return (
        <>
        <p>usage: theme [arg]...</p>
        <pre>   [args]</pre>
        <pre>       ls: list all available themes</pre>
        <pre>       set: set theme to [theme]</pre>
        <pre>   [examples]</pre>
        <pre>       theme ls</pre>
        <pre>       theme set dark</pre>
        </>
        )
    } else if (arg == "ls" || arg == "list") {
        return (
        <>
        <p>dark</p><br />
        <p>ubuntu</p>
        <br />
        </>
        )
    } else if (arg == "set") {
        if (newTheme == "" || newTheme == null || !["dark", "ubuntu"].includes(newTheme)) {
            return <>{newTheme} is not a valid theme<br /></>
        } else {
            useEffect(() => {
                setTheme(newTheme);
              }, []);
        }
    } else {
        return <>{arg} is not a valid theme [arg]<br /></>
    }
    return "";
};

export default SetTheme;