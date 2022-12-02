const { name } = require("ejs")
const Product = require("./products.model")

const findById = async(id)=>{
    return await Product.findById(id)
}
 const find = async ()=>{
return await Product.find()
 }

 const save=async(productData)=>{
 const product = new Product(productData)
 return await product.save()
 }

 const DeleteById = async(id)=>{
    return await Product.deleteOne(id)
}

const findByname = async(name)=>{
    return await Product.findOne({name})
}

 module.exports = {findById,find,save,DeleteById,findByname}