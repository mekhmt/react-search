import React from 'react'
import './Price.css'
import Input from '../../components/Input';
function Price({handleChange}) {
  return (
    <div className='ml'>
        <h2 className='sidebar-title price-title'>Price</h2>

        <Input handleChange={handleChange} value={""} title={"All"} name={"text2"}/>
        <Input handleChange={handleChange} value={50} title={"$0-$50"} name={"text2"}/>
        <Input handleChange={handleChange} value={100} title={"$50-$100"} name={"text2"}/>
        <Input handleChange={handleChange} value={150} title={"$100-$150"} name={"text2"}/>
        <Input handleChange={handleChange} value={200} title={"Over $150"} name={"text2"}/>

       
    </div>
  )
}

export default Price;
