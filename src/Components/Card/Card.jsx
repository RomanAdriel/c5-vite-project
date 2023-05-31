import React from 'react'
import * as CardStyles from './Card.module.css'

const Card = ({cardContent, setCardContent}) => {
  return (
    <div className={CardStyles.card} style={{backgroundColor: cardContent.color}}>
      <h1>{cardContent.city}</h1>
      <h2>{cardContent.country == "BRA" ? "Brazil" : "Argentina"}</h2>
      <h3>{`Population: ${cardContent.population}`}</h3>
      <button onClick={() => {setCardContent((prevCardContent) => [...prevCardContent, cardContent.city])}}>Agregar Ciudad</button>
    </div>
  )
}

export default Card