const productsService = require('./products.service')

const findById = async(req,res) => {
    const product = await productsService.findById(req.params.productId)
    res.json({status:'success',data:product})
}

const find = async(req,res) => {
    const product = await productsService.find()
    res.json({status:'success',data:product})
}

const save = async (req,res) => {
    const product =req.body
    const updatedProduct = await productsService.save(product)
    res.json({status:'success',data:{product:updatedProduct}})
}

const DeleteById = async(req,res) => {
    const product = await productsService.DeleteById(req.params.productId)
    res.json({status:'success',data:product})
}

const findByName = async(req,res) => {
    const product = await productsService.findByname(req.params.name)
    res.json({status:'success',data:product})
}

module.exports = {findById,find,save,DeleteById ,findByName}