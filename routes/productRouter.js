const router = require('express').Router()
const productController = require('../controllers/productController')

router.route('/')
    .get(productController.getProducts)
    .post(productController.addProduct)

router.route('/:id')
    .get(productController.getProduct)
    .delete(productController.deleteProduct)
    .put(productController.updateProduct)

module.exports = router