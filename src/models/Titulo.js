import React from 'react'
import '../stylesheets/Titulo.scss'

export default function Titulo( {text, parrafo} ) {
  return (
    <>
      <h2 className='subencabezado'>{ text }</h2>
      <hr className='linea'/>
      <p className='parrafo-descripcion'>{ parrafo }</p>
    </>
  )
}
