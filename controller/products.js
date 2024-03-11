const proDataSchema = require("../model/productSchema")

const getAllProducts = async (req , res) => {
    const data = await proDataSchema.find(req.query)
    return res.status(200).json(data)
}


module.exports = {
    getAllProducts , 
}

