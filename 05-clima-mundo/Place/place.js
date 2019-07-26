const axios = require("axios");

const getLugarLatLng = async (direccion)=>{
    const encodedURL = encodeURI(direccion)
    const instance = axios.create({
      baseURL:
        `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
      headers: {
        "X-RapidAPI-Key": "2e5a019a8bmsh143d5c6e03dd711p106412jsnec8fe05fe6cb",
        "X-RapidAPI-Host": "devru-latitude-longitude-find-v1.p.rapidapi.com"
      }
    });
    const resp = await instance.get()
    if(resp.data.Results.length ===0){
        throw new Error (`No hay resultado para ${direccion}`)
    }
    const {name,lat,lon} = resp.data.Results[0]
    
    return {
        direccion:name,
        latitud:lat,
        longitud:lon
    }
    
}

module.exports={
    getLugarLatLng
}