import axios from "axios"

const getProvincias = async (estado) =>{
  const url = 'https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre'
  const response = await axios.get(url)
  await estado(response.data.provincias)
}

const getDepartamentos = async(estado, id) =>{
  const url=`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${id}&campos=id,nombre,centroide&max=100`
  const response = await axios.get(url)
  await estado(response.data.departamentos)
  console.log('depa', response)
}


const getCentroide = async(estado, id) =>{
  const url = `https://apis.datos.gob.ar/georef/api/departamentos?id=${id}`
  const response = await axios(url)
  await estado(response.data.departamentos[0].centroide)

}

const getTiempo = async (estado,centroide) =>{
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${centroide.lat}&lon=${centroide.lon}&appid=f2de0542452861f6de910b4a66fc67dc`
  const response = await axios.get(url)
  estado(response.data)
}

function removeDuplicates(originalArray, prop) {
  var newArray = [];
  var lookupObject  = {};

  for(var i in originalArray) {
     lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for(i in lookupObject) {
      newArray.push(lookupObject[i]);
  }
   return newArray;
}



export { getProvincias, getDepartamentos, getCentroide, getTiempo, removeDuplicates } 