import React from 'react'
import './Catagory.css'
import Input from '../../components/Input';
function Catagory({handleChange}) {
  return (
    <div>
        <h2 className='sidebar-title'>Catagory</h2>
        <div>
            


           
            <Input handleChange={handleChange} value={""} title={"All"} name={"text"}/>
            <Input handleChange={handleChange} value={"sneakers"} title={"Sneakers"} name={"text"}/>
            <Input handleChange={handleChange} value={"flats"} title={"Flats"} name={"text"}/>
            <Input handleChange={handleChange} value={"sandals"} title={"Sandals"} name={"text"}/>
            <Input handleChange={handleChange} value={"heels"} title={"Heels"} name={"text"}/>
            
            
        </div>
    </div>
  )
}

export default Catagory;
