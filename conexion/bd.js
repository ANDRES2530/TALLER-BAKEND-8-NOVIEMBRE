let mysql=require('mysql2');

let conectar=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Andres2530",
    database:"taller_api",
    port:3306
})
conectar.connect((error)=>{
    if(error){
        console.log("erroe en la conexion")
    }
    else{
        console.log("conexion realizada")
    }
})
module.exports=conectar