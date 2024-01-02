import { FaStar } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";


 function Card(props) {
  return (
    <section className='card'>
            <img className='card-img' src={props.img} alt={props.title}/>
            <div className='card-details'>
                <h3 className='card-title'>{props.title}</h3>
                <section className='card-reviews'>
                    <FaStar className='rating-stars' /><FaStar className='rating-stars' /><FaStar className='rating-stars' /><FaStar className='rating-stars' /><FaStar className='rating-stars' />
                    <span className='total-reviews'>{props.reviews}</span>
                
                </section>
                <section className='card-price'>
                    <div className='price'>
                        <del>${props.prevPrice}</del> ${props.newPrice}

                    </div>
                    <div className='bag'>
                    <BsBagHeartFill className='bag-icon'/>
                    </div>
                </section>
                

            </div>
    </section>
  )
}


export default Card;