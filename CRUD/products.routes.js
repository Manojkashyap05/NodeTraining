const express = require('express');
const {findById , find , save ,DeleteById, findByName} = require('./products.controller')
const router = express.Router()

router.get('/',find);
router.get('/:productId',findById)
router.post('/',save)
router.delete('/',DeleteById)
router.get('/:name',findByName)

module.exports = router