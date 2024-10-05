import React, { useCallback, useEffect, useRef, useState } from 'react';
import Command from '../terminal/components/Command';
import Output from '../terminal/components/Output';
import { link_map } from '../terminal/data/links'


var output_count = 1

const Terminal = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<any[]>([]);
    const [history, setHistory] = useState<string[]>(["welcome"]);
    const [username, setUsername] = useState("guest")
    const [hostname, setHostname] = useState("tu-nguyen.github.io")
    const [path, setPath] = useState("~")
    const [symbol, setSymbol] = useState("$")
    const [theme, setTheme] = useState("ubuntu")
    const [link, setLink] = useState("")
    const containerRef = useRef(null);
    const inputRef = useRef(null);


    useEffect(()=>{
        inputRef.current.focus();
    },[])

    const handleClick = useCallback(
        e => {
            inputRef.current.focus();
        },[])

    const handleChange = useCallback(
        e => {
            setInput(e.target.value);
        }, 
        [input]
    )

    const handleKeyDown = useCallback(
        e => {
            if (e.key === "Enter") {
                console.log("enter")
            };
        }, 
        [input]
    )

    const handleSubmit = (
        e => {
            e.preventDefault();
            setHistory([input, ...history]);

            var input_arr = input.split(/\s+/)
            var cmd = input_arr[0]
            var args = input_arr.slice(1)

            output_count += 1
            const newOutput = Command(
                cmd, 
                args,
                output_count,
                username, 
                hostname, 
                path, 
                symbol,
                setUsername,
                setHostname,
                setOutput,
                setTheme,
            )
            setOutput([newOutput, ...output])
            setInput("");

            if (cmd == "exit") {
                window.open("https://tu-nguyen.github.io/", "_self")
            } else if (cmd in link_map) {
                window.open(link_map[cmd])
            } else if (cmd == "socials" && args[0] in link_map) {
                window.open(link_map[args[0]])
            }
        }
    )

    return (
        <div
            className={`${theme} terminal`}
            ref={containerRef}
            onClick={handleClick}
        >
            <Output output={output}/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="terminal-input">{username}@{hostname}~$ </label>
                <input
                    id = "terminal-input"
                    title="terminal-input"
                    type="text"
                    value={input}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                />
            </form>
        </div >
    );
};

export default Terminal;