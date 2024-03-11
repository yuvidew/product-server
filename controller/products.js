const proDataSchema = require("../model/productSchema")

const getAllProducts = async (req , res) => {
    const data = await proDataSchema.find(req.query)
    return res.status(200).json(data)
}

const postProduct = async (req , res) => {
    const {body} = req
    try {
        const result = await proDataSchema.create(body)
        if(result) return res.status(200).json(result)
    } catch (error) {
        return res.status(404).json(error)
    }
}


module.exports = {
    getAllProducts , 
    postProduct
}

