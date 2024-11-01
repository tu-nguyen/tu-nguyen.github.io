import React from 'react'

function Item(props) {
    return <li>{props.message}</li>;
}

const Skill = ({ skill }) => {
    return (
    <div className="h-68 rounded p-3 text-gray-300 hover:text-white hover:shadow-sky-700 transition duration-300 hover:scale-[1.01]">
        <div className="h-24 w-auto sm:h-28 border-b-2 border-sky-600 content-center">
            <h4 className='text-md sm:text-lg text-center font-black p-3'>
                {skill.title}
            </h4>
        </div>
        
        <div className='h-36 text-center font-medium py-3'>
            <ul className=' '>
                {skill.skills.map((message) => <Item key={message} message={message} />)}
            </ul>
        </div>
    </div>
    )
}

export default Skill
