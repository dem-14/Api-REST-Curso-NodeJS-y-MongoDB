//bodyParser and nodemon
const express=require('express');
const bodyParser=require('body-parser');
const port=process.env.PORT || 3001 
const app=express(); 
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.listen(port,()=>{
    console.log(`API REST corriendo en http://localhost:${port}`)
});
