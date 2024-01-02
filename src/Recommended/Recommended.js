import React from 'react'
import './Recommended.css'
import Buttons from './Buttons';
function Recommended({handleClick}) {
  return (
    <>
        <div>
            <h2 className='recommended-title'>Recommended</h2>
            <div className='recommended-flex'>
                <Buttons handleClick={handleClick} value={""}  name={"All Products"}/>
                <Buttons handleClick={handleClick} value={"Nike"}  name={"Nike"}/>
                <Buttons handleClick={handleClick} value={"Adidas"}  name={"Adidas"}/>
                <Buttons handleClick={handleClick} value={"Puma"}  name={"Puma"}/>
                <Buttons handleClick={handleClick} value={"Vans"}  name={"Vans"}/>
            </div>
        </div>
    </>
  )
}

export default Recommended;
