import React from 'react'

function Item(props) {
  return <li>{props.message}</li>;
}

const Skill = ({ skill }) => {
  return (
    <div>
      <div>
        <h4 className='text-center my-6 sm:my-3 text-xl font-bold'>
          {skill.title}
        </h4>
      </div>

      <div className='text-center'>
        <ul>
          {skill.skills.map((message) => <Item key={message} message={message} />)}
        </ul>
      </div>
    </div>
  )
}

export default Skill
