import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosGet = () => {

    const [comentarios, setComentarios] = useState([{}]);

    const url = 'https://jsonplaceholder.typicode.com/comments';


    useEffect(() => {
        axios.get(url).then((res) => {
            setComentarios(res.data)
            console.log(comentarios)
        })
    ;
    }, [])

  return (
    <>
    <ul>
        {comentarios.map((element, index) => <li key={index}>{element.email}</li>)}
    </ul>
    </>
  )
  }

export default AxiosGet