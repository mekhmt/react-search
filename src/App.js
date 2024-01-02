
import { useState } from 'react';
import './App.css';
import Nav from './Navigation/Nav';
import Product from './Products/Product';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './data/db';
import Card from './components/Card';
function App() {
  const [selectedCatagory, setSelectedCatagory] = useState(null)

  //input Filter

  const [query,setQuery] = useState("")
  const handleInputChange = (event)=>{
    setQuery(event.target.value)
  }

  const filteredItem = products.filter((product)=> product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1)
  

  // radio filter

  const handleChange = (event)=>{
    console.log(event.target.value)
    setSelectedCatagory(event.target.value)
  }

  // filter for buttons
    const handleClick = (event)=>{
      console.log(event.target.value);
      setSelectedCatagory(event.target.value)
    }

    function filteredData(products,selected, query){
      let filteredProducts = products
        // filtering input items 
        if(query){
          filteredProducts = filteredItem
        }

        // slected filter

        if(selected){
          filteredProducts = filteredProducts.filter(({category,color,company,newPrice,title})=> (category === selected || color === selected || company === selected || newPrice === selected || title === selected))
        }

        return filteredProducts.map((p,k)=>(
          <Card 
            key = {k}
            img = {p.img}
            title = {p.title}
            star = {p.star}
            reviews = {p.reviews}
            newPrice = {p.newPrice}
            prevPrice = {p.prevPrice}
          />
        ))
    }


    const result = filteredData(products,selectedCatagory,query)

  return (
   <>
    <Sidebar handleChange={handleChange}/>
    <Nav/>
    <Recommended handleClick={handleClick}/>
    <Product result={result}/>
    
   </>
  );
}

export default App;
