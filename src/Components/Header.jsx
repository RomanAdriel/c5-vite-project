import React from 'react'

const Header = (props) => {
  return (
    <>
        <h1>Bienvenido a Compumundo Hipermegared</h1>
        <p>En qué puedo ayudarlo, {props.children}</p>
    </>
  )
}

export default Header