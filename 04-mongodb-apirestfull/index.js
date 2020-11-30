const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const product=require('./models/product.js')
const app=express();
const port=process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.get('/api/product', (req, res) => {
product.find({}, (err, products)=>{
    if(err)return res.status(500).send({message: `error en la peticion: ${err}`})
    if(!product)return res.status(404).send({Message: 'el producto no existe'})
    res.status(200).send({ products })    
}) 
}); 
app.get('/api/product/:productId', (req, res) => {
    let productId = req.params.productId
    product.findById(productId, (err, product)=>{
if(err)return res.status(500).send({message: `error en la peticion: ${err}`})
if(!product)return res.status(404).send({Message: 'el producto no existe'})

res.status(200).send({product: product})
    })
    
    
});
app.post('/api/product', (req, res) => {
    console.log('post/api/products')
    console.log(re.body)
    let product = new Product()
    product.name=req.body.name
product.picture=req.body.picture
product.price=req.body.price
product.category=req.body.category
product.description=req.body.description
product.save((err, productStored)=> {
    if(err){
        res.status(500)
        res.send({message: 'error al salvar el producto' })
    }
    else {
        res.sendStatus(200).send({product: productStored})
    }
})
    
    
}); 
app.put('/api/product/:productId', (req, res) => {
    let productId = req.params.productId
    let update=req.body
    product.findByIdAndUpdate(productId, update, (err, productUpdated)=> {
        if(err)res.status(500).send({message: `error al actualizar el producto : ${err}`})
        res.status(200).send({product: productUpdated})
    })
    });

app.delete('/api/product/:productId', (req, res) => {
    let productId = req.params.productId
    product.findById(productId, (err, product)=>{
if(err) res.status(500).send({message: `error al borrar el producto: ${err}`}) 
product.remove(err =>{
    if(err) res.status(500).send({message: `error al borrar el producto: ${err}`})
    res.status(200).send({message: 'el producto se ha borrado'})
})
    })    
});

mongoose.connect('mongodb://localhost:27017/shop', {useNewUrlParser: true, useUnifiedTopology: true}, (err,res)=> {
if(err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
}
console.log('conexion establecida con exito');
app.listen(port,()=>{
    console.log(`API REST corriendo en http://localhost:${port}`)
});
});




