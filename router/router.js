const express = require('express')
const { getAllProducts  , postProduct} = require('../controller/products')
const router = express.Router()

router.get('/v1/products' , getAllProducts)
router.post('/v1/add/product' , postProduct)

module.exports = router
