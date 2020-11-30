const product=require('../models/product.js')
function getProduct(req, res){
    
        let productId = req.params.productId
        product.findById(productId, (err, product)=>{
    if(err)return res.status(500).send({message: `error en la peticion: ${err}`})
    if(!product)return res.status(404).send({Message: 'el producto no existe'})
    
    res.status(200).send({product: product})
        })
}
function getProducts(req, res) {
    
        product.find({}, (err, products)=>{
            if(err)return res.status(500).send({message: `error en la peticion: ${err}`})
            if(!product)return res.status(404).send({Message: 'el producto no existe'})
            res.status(200).send({ products })    
        }) 
        
}
function saveProduct(req, res) {
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

}
function updateProduct(req, res) {
    let productId = req.params.productId
    let update=req.body
    product.findByIdAndUpdate(productId, update, (err, productUpdated)=> {
        if(err)res.status(500).send({message: `error al actualizar el producto : ${err}`})
        res.status(200).send({product: productUpdated})
    })
}
function deleteProduct(req, res) {
    let productId = req.params.productId
    product.findById(productId, (err, product)=>{
if(err) res.status(500).send({message: `error al borrar el producto: ${err}`}) 
product.remove(err =>{
    if(err) res.status(500).send({message: `error al borrar el producto: ${err}`})
    res.status(200).send({message: 'el producto se ha borrado'})
})
    })
}
module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}