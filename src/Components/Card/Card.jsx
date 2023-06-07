import React, { useEffect, useState } from 'react'
import List from '../List/List'

const Card = () => {

  const [mostrarPedido, setMostrarPedido] = useState(false);


  useEffect(() => {
    console.log("Se montó la Card");
    setTimeout(() => {
      setMostrarPedido(true);
      console.log("Se ejecutó el componentDidMount() de Card");
    }, 2000);
}, [])

  return (
    <>
    <h2>Su pedido: </h2>
    {mostrarPedido && <List/>}
    <button onClick={() => setMostrarPedido(false)}>Cancelar Pedido</button>
    </>


  )
}

export default Card