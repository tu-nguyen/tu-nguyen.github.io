import React, { useCallback, useEffect } from 'react'


const Clear = ({setOutput}) => {
    useEffect(() => {
        setOutput([]);
      }, []);

    return "";
};

export default Clear;