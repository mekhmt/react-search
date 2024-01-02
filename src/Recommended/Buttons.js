import React from 'react'
import './Recommended.css'
export default function Buttons(props) {
  return (
    <div>
        <button className='btns' onClick={props.handleClick} value={props.value}>{props.name}</button>
    </div>
  )
}
