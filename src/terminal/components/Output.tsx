import React from "react";
import Prompt from "./Prompt";

function Output({output}) {

    function Display({cmd, output}) {
        if (cmd === "" || cmd === "setname" || cmd === "clear") {
            return <><br />{output}</>
        } else if (!output) {
            return <><br />{cmd} is not a valid command<br /></>
        } else {
            return <><br />{output}<br /></>
        }
    }

    return (
        <>
            {output.toReversed().map((out) => (
                <>
                <Prompt key={out.id} out={ out }/> {out.command} {out.args} 
                <Display cmd={out.command} output={out.out} />
                {/* <br />{out.out}<br /> */}
                </>
            ))}
        </>
    )
  };

  export default Output;
