import React, { useEffect } from 'react'
import Tiempo from './Tiempo'
import './contenedortiempo.css'

const ContenedorTiempo = ({tarjetas}) => {
  useEffect(()=>{},[tarjetas])
  return (
    <>
    <div className="tarjetas">
      {(tarjetas.map((e)=>(<Tiempo departamento={e.departamento} depatexto={e.texto} key={e.departamento}/>))) }
    </div>  
    </>
  )
}

export default ContenedorTiempo