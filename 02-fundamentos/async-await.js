// let getNombre = async()=>{ 
//     throw new Error('no existe nombre para ese usuario')
//     'Fernando'}

let getNombre = ()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve('Fernando')
        }, 3000);
    })
}
let Saludo = async ()=>{
    return `hola ${await getNombre()}`
}
// getNombre()
// .then(nombre=>console.log(nombre))
// .catch(e=>console.log(`error de async ${e}`))
Saludo().then((mensaje)=>{
    console.log(mensaje);
})