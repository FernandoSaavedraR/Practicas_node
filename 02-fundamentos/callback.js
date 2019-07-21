// setTimeout(() => {
//     console.log('Hola mundo');
// }, 3000);
let getUsuarioByID = (id,callback)=>{
    let usuario = {
        nombre:'Fernando',
        id 
    }
    if(id===20){
        callback(`usuario con id ${id} no existe`)
    }else{

        callback(null,usuario)
    }
}
getUsuarioByID(210,(err,usuario)=>{
    if(err){
        console.log(err)
        return
    }
        console.log(usuario)
    
})