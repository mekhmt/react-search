import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";

import './Nav.css'
function Nav() {
  return (
    <nav>
        <div className='nav-container'>
            <input type='text' placeholder='Enter your search items'/>

        </div>
        <div className='profile-container'>
            <a href='#' className='nav-icon'><FaRegHeart /></a>
            <a href='#' className='nav-icon'><MdOutlineShoppingCart /></a>
            <a href='#' className='nav-icon'><AiOutlineUserAdd /></a>
        </div>

      
    </nav>
  )
}

export default Nav;
