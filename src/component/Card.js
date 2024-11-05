import React from 'react'
import { cardData } from './Constant'
import "../App.css"
const Card = () => {
  return (
    
      <div className='flex justify-content-around my-5'>
      {cardData.map((card) => (
        <div className='card-livspace my-4' key={card.id}>
          <img
            className='card-img-liv'
            src={card.image}
            alt='card img'
          />
          <h5 className='card-head mt-4 mb-2'>{card.title}</h5>
          <p className='card-text mb-5 mt-2'>{card.description}</p>
        </div>
      ))}
      
    </div>
  )
}

export default Card
