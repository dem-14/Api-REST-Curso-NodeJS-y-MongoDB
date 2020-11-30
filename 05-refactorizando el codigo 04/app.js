const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const productCtrl=require('./controlers/product.js');
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.get('/api/product', productCtrl.getProducts)
app.get('/api/product/:productId', productCtrl.getProduct)
app.post('/api/product/:productId', productCtrl.saveProduct)
app.put('/api/product/:productId', productCtrl.updateProduct)
app.delete('/api/product/:productId', productCtrl.deleteProduct)
module.exports = app