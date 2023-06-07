import React, { useEffect } from 'react'

const List = () => {

    useEffect(() => {
        console.log("Se montó la Lista")
        return () => {
            console.log("Se desmontó la Lista");
            alert("Su pedido ha sido cancelado")
        }
    }, []);

  return (
    <>
        <li>Pizzas</li>
    </>

  )
}

export default List