import React from 'react'
import './Color.css'
import Input from '../../components/Input';
function Color({handleChange}) {
  return (
    <div>
        <h2 className='sidebar-title color-title'>Color</h2>
        <Input handleChange={handleChange} value={""} title={"All"} color={"white"} name={"text3"}/>
        <Input handleChange={handleChange} value={"blue"} title={"Blue"} color={"blue"} name={"text3"}/>
        <Input handleChange={handleChange} value={"black"} title={"Black"} color={"black"} name={"text3"}/>
        <Input handleChange={handleChange} value={"red"} title={"Red"} color={"red"} name={"text3"}/>
        <Input handleChange={handleChange} value={"white"} title={"White"} color={"white"} name={"text3"}/>
    </div>
  )
}


export default Color;