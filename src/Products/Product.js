import React from 'react'

import './Product.css'
import Card from '../components/Card';
function Product(props) {
  return (
    <>
    <section className='card-container'> 
       
    {props.result}

    </section>
    </>
  )
}

export default Product;
