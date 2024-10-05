import React from "react";
import About from "../commands/About"
import Clear from "../commands/Clear";
import Welcome from "../commands/Welcome";
import SetName from "../commands/SetName";
import Echo from "../commands/Echo";
import Help from "../commands/Help";
import Jobs from "../commands/Jobs";
import Projects from "../commands/Projects";
import Contact from "../commands/Contact";


const Command = (
    cmd: any, 
    args: any,
    output_count, 
    username, 
    hostname, 
    path, 
    symbol,
    setUsername,
    setHostname,
    setOutput,
    setTheme,
) => {

    var newOut = {
        "test": "test",
        "welcome": <Welcome />,
        "help": <Help />,
        "about": <About />,
        "whoami": <About />,
        
        "jobs": <Jobs />,
        "job": <Jobs />,
        "work": <Jobs />,
        "projects": <Projects />,
        "project": <Projects />,
        "portfolio": <Projects />,

        "socials": <Contact name={args[0]} />,
        "linkedin": <Contact name={"linkedin"} />,
        "github": <Contact name={"github"} />,
        "email": <Contact name={"email"} />,
        "resume": <Contact name={"resume"} />,

        "setname": <SetName setUsername={setUsername} newName={args[0]} />,
        "clear": <Clear setOutput={setOutput} />,
        "echo": <Echo args={args.join(" ")} />,
    }[cmd]

    return (
        {
            "id": output_count,
            "username": username,
            "hostname": hostname,
            "path": path,
            "symbol": symbol,
            "command": cmd,
            "args": args.join(" "),
            "out": newOut,
        }
    )
}

export default Command;