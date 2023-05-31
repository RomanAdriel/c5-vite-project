import React from 'react'
import * as CardStyles from './Card.module.css'

const Card = ({city}) => {
  return (
    <div className={CardStyles.card} style={{backgroundColor: city.color}}>
      <h1>{city.city}</h1>
      <h2>{city.country == "BRA" ? "Brazil" : "Argentina"}</h2>
      <h3>{`Population: ${city.population}`}</h3>
      <h4></h4>
    </div>
  )
}

export default Card