import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb-CRG7E9XzAXp3UlKyQFyMTyuZh_mXbAcHA&s" alt="" width={83} style={{}} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card
