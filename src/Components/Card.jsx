import React from 'react'

const Card = ({item}) => {
    return (
        <li>
            <h2>{item.nombre}</h2>
            <img src={item.imagen}/>
            <h3>{item.precio}</h3>
        </li>
    )
}

export default Card