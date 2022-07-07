import React from 'react'
import { useState } from 'react'
import './selector.css'
import { getProvincias, getDepartamentos, removeDuplicates } from '../../functions.js'
import { useEffect } from 'react'
import Tiempo from '../clima/Tiempo'
import ContenedorTiempo from '../clima/ContenedorTiempo'

const Selector = () => {

  //-----------------Provincias--------------------------
  const [provincias, setProvincias] = useState(null)
  useEffect(()=>{getProvincias(setProvincias)},[])

  const [provselec, setProvselec] = useState(null)

  const seleccionarProvincia = (e) =>{
    setProvselec(e.target.value)

  }





  //-----------------Departamentos--------------------------
  const [departamentos, setDepartamentos] = useState(null)
  useEffect(()=>{
    if(provselec!= null){
      getDepartamentos(setDepartamentos,provselec)
    }

  },[provselec])

  const [departamento, setDepartamento] = useState(null)
  const [depaTexto, setDepaTexto] = useState('')

  const seleccionarDepartamento = (e) =>{
    setDepartamento(e.target.value)
    let index = e.target.selectedIndex;
    setDepaTexto(e.target.options[index].text)
  }

  //----------------------Tarjetas-----------------------------

  const [tarjetas, setTarjetas] = useState([])
  const agregarTarjeta = () =>{

      setTarjetas(tarjetas.concat({"departamento":departamento, "texto":depaTexto}))
  }

  const eliminarTarjeta = (dep)=>{
    let newArr = tarjetas.filter(e => e.departamento != dep )
    setTarjetas(newArr)
  }



  return (
    <>
    <div className="selectores__container">

      <div className="select">
        <select name='form-provincias' defaultValue={'default'} onChange={seleccionarProvincia}>
          <option value='default' disabled>Elegir provincia</option>
          {provincias != null? (provincias.map((pr)=>(<option key={pr.id} value={pr.id}>{pr.nombre}</option>))) : 'no hay provincias'}
        </select>
        <div className="select_arrow"></div>

      </div>

      <div className="select">
        <select name='form-departamentos' defaultValue={'default'} onChange={seleccionarDepartamento}>
          <option value='default' disabled>Eegir departamento</option>
          {departamentos != null ? (departamentos.map((depa)=>(<option value={depa.id} key={depa.id}>{depa.nombre}</option>))) : 'no hay provincias'}
        
        </select>
        <div className="select_arrow"></div>

      </div>

    <button className='agregar-btn' onClick={agregarTarjeta}>Agregar</button>
      
      
    </div>
      
      {/*departamento !=null ? (<Tiempo departamento={departamento} depatexto={depaTexto}/>) : ''*/}
      <ContenedorTiempo tarjetas={removeDuplicates(tarjetas,"departamento")}/>
    </>
  )
}

export default Selector