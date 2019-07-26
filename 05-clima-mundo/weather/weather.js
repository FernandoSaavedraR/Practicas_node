const axios = require("axios");

const getCLima = async (lat,lon)=>{
    const appid ='dd50c1e46f406a12c6254cdce1ba209b'
    const units ='metric'
    const {data:{
        main,
        main:{
            temp
        }
    }} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=${units}`);
    //console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=${units}`);
    return main
    

}
module.exports={
    getCLima
}