import axios from 'axios';
import React, { useState } from 'react'

const AxiosPost = () => {

    const [nuevoComentario, setNuevoComentario] = useState({
        name: '',
        email: '',
        body: ''
    });

    const url = 'https://jsonplaceholder.typicode.com/comments';

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(nuevoComentario);

        axios.post(url, nuevoComentario)
    }

  return (
    <>
    <h1>Formulario</h1>
    <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type='text' onChange={(e) => setNuevoComentario((prev) => ({...prev, name: e.target.value}))}/>
        <label>Email: </label>
        <input type='email' onChange={(e) => setNuevoComentario((prev) => ({...prev, email: e.target.value}))}/>
        <label>Body: </label>
        <input type='text' onChange={(e) => setNuevoComentario((prev) => ({...prev, body: e.target.value}))}/>
        <button type='submit'>Enviar</button>
    </form>
    </>
  )
}

export default AxiosPost