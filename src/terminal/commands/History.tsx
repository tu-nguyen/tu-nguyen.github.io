import React from 'react'


const History = ({history}) => {
    var history_arr = [];
    for (const [index, value] of history.reverse().entries()) {
        console.log(index)
        console.log(value)
        history_arr.push({id: index, history: value})
    }

    console.log(history_arr.reverse())
    
    return (
        <>
        {history_arr.map((h) => (
            <div key={h.id}>
                <p>{h.history}</p><br />
            </div>
        ))}
        </>
    );
};

export default History;