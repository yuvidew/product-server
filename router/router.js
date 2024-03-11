const express = require('express')
const { getAllProducts } = require('../controller/products')
const router = express.Router()

router.get('/v1/products' , getAllProducts)

module.exports = router
