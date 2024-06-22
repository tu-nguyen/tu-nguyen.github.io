import React from 'react'

function Item(props) {
    return <li>{props.message}</li>;
  }

const Skill = ({ skill }) => {
  return (
    <div>
        {skill.title}

        <ul>
            {skill.skills.map((message) => <Item key={message} message={message} />)}
        </ul>
      
    </div>
  )
}

export default Skill
