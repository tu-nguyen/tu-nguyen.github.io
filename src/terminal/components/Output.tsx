import React from "react";
import Prompt from "./Prompt";

function Output({output, theme}) {
    console.log("yo")
    console.log(theme)

    var theme = theme + "-prompt"

    function Display({cmd, output}) {
        if (cmd == "" || cmd == null) {
            return <><br /></>
        } else if (!output) {
            return <><br />{cmd} is not a valid command<br /></>
        } else {
            return <><br />{output}</>
        }
    }

    return (
        <>
            {output.toReversed().map((out) => (
                <>
                <Prompt key={out.id} out={ out } theme={theme}/> {out.command} {out.args} 
                <Display cmd={out.command} output={out.out} />
                {/* <br />{out.out}<br /> */}
                </>
            ))}
        </>
    )
  };

  export default Output;
