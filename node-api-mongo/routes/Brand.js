const { Router } = require('express')
const ClothesController = require('../controllers/Brand')

const router = Router()

router.get('/', BrandController.getBrands)
router.get('/:id?', BrandController.getBrand)
router.post('/save-clothe', BrandController.saveBrand)
router.put('/edit-clothe/:id?', BrandController.updateBrand)
router.delete('/delete-clothe/:id?', BrandController.deleteBrand)

module.exports = router