import React from "react";
// username, hostname, path, symbol

const Prompt = ({ out }) => {
  return (
    <span className="prompt">
        {out.username}@{out.hostname}{out.path}{out.symbol}
    </span>
  );
};

export default Prompt;