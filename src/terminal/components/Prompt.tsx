import React from "react";
// username, hostname, path, symbol

const Prompt = ({ out, theme }) => {
  return (
    <>
    <span className={theme}>
        {out.username}@{out.hostname}
    </span>
    <span>
      {out.path}{out.symbol}
    </span></>
  );
};

export default Prompt;