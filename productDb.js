require('dotenv').config()
const connectDB = require('./db/connect')
const Product = require('./model/productSchema')
const proJson = require('./prodata.json')

const start = async() =>{
    try {
        await connectDB(process.env.MDB_URL)
        await Product.create(proJson)
        console.log('added Successfully');
    } catch (error) {
        console.log(error);
    }
}

start()