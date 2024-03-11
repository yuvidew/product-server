const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    productName : {
        type : String,
    },
    brand : {
        type : String,
    },
    category : {
        type : String,
    },
    price : {
        type : Number,
    },
    image : {
        type : String,
    },
    description : {
        type : String,
    }
})

const proDataSchema = mongoose.model('products' , productSchema)

module.exports = proDataSchema