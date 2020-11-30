const mongoose=require('mongoose');
const app = require('./app.js')
const port=process.env.PORT || 3000
 
mongoose.connect('mongodb://localhost:27017/shop', {useNewUrlParser: true, useUnifiedTopology: true}, (err,res)=> {
if(err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
}
console.log('conexion establecida con exito');
app.listen(port,()=>{
    console.log(`API REST corriendo en http://localhost:${port}`)
});
});




