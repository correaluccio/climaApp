import React, { useState } from 'react'
import { useEffect } from 'react'
import { getTiempo , getCentroide} from '../../functions'
import './tiempo.css'
import {WiCloudyGusts} from 'react-icons/wi'

const Tiempo = ({departamento,depatexto,eliminar}) => {

  const [centroide, setCentroide] = useState(null)
  useEffect(()=>{
    if(departamento != null){
      
      setCentroide(getCentroide(setCentroide, departamento))
    }
  },[departamento])

  const [tiempo, setTiempo] = useState(null)
  useEffect(()=>{
    if(centroide != null){

      getTiempo(setTiempo,centroide)

    }
  },[centroide])


  return (
    <>
     {tiempo !=null ? (<div className="card">
        <h1>{depatexto}</h1>
        <WiCloudyGusts className='ico'/>
        <h1>{(tiempo.main.temp-273).toFixed(2)}°C</h1>
        <h5>ST: {(tiempo.main.feels_like-273).toFixed(2)}°C</h5>
        <h5>Presión: {tiempo.main.pressure}hPa</h5>
        <h5>{tiempo.weather[0].description}</h5>
        <h6>Ventoso</h6>
        <button className='btn-quit' id={depatexto}>X</button>
      </div>) : ''}
      
    </>
  )
}

export default Tiempo