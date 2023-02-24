import React, { useState } from 'react'

const Questions = (props) => {
    const [isActive, setIsActive]=useState(false);
  return (
    <div><div className="accordion-item">
    <a onClick={()=>setIsActive(!isActive)}>{props.question}</a>
    {isActive && <div className="content active">
      <p>
        {props.answer}
      </p>
    </div>}
  </div></div>
  )
}

export default Questions