import React from 'react'
import './Sidebar.css'
import { IoCartOutline } from "react-icons/io5";
import Catagory from './Catagory/Catagory';
import Price from './Price/Price';
import Color from './Color/Color';
function Sidebar(props) {
    
  return (
    <>
        <section className='sidebar'>
            <div className='logo-container'>
                <h1><IoCartOutline /></h1>
            </div>
            <Catagory handleChange={props.handleChange}/>
            <Price handleChange={props.handleChange}/>
            <Color handleChange={props.handleChange}/>
        </section>
    </>
  )
}

export default Sidebar;
