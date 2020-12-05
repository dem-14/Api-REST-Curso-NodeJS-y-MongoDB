'use strict'
const mongoose=require('mongoose');
const app = require('./app.js')
const config=require('./config.js');
 
mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true}, (err,res)=> {
if(err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
}
console.log('conexion establecida con exito');
app.listen(config.port,()=>{
    console.log(`API REST corriendo en http://localhost:${config.port}`)
});
});




