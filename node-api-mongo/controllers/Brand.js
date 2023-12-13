let Clothe = require('../models/Brand')

const controller = {
  getBrand: function (req, res) {
    Brand.find({}).exec()
      .then(brandList => {
        if (!brandList) return res.status(404).send({message: "No data found"})
        return res.status(200).json(brandList)
      })
      .catch(err => res.status(500).send({message: `Error: ${err}`}))
  },
  getBrand: function (req, res) {
    let brandId = req.params.id
    if (brandId == null) return res.status(404).send({message: "brand not found"})

    Brand.findById(brandId).exec()
      .then(data => {
        if (!data) return res.status(404).send({message: "brand not found"})
        return res.status(200).json(data)
      })
      .catch(err => res.status(500).send({message: `Internal error-> ${err}`}))
  },
  saveBrand: function (req, res) {
    let Brand = new Brand()
    const {name, origin} = req.body
    if (name && origin) {
      Brand.name = name
      Brand.origin = origin
      
      
      Brand.save()
        .then(storedBrand => {
          storedBrand
            ? res.status(200).json({brand: storedBrand})
            : res.status(404).send({message: "Error saving the document"})
        })
        .catch(error => res.status(500).send({message: "Error while saving the document"}))
    } else {
      return res.status(400).send({message: "Data is not right"})
    }
  },
  updateBrand: function (req, res) {
    let brandId= req.params.id
    let update = req.body

    Brand.findByIdAndUpdate(brandId, update, {returnDocument: 'after'})
      .then(updatedBrand => {
        if(!updatedBrand) return res.status(404).send({message: "The document does not exist"})
        return res.status(200).send({brand: updatedBrand})
      })
      .catch(error => res.status(500).send({message: `Error while updating ${error}`}))
  },
  deleteBrand: function (req, res) {
    let brandId = req.params.id

    Brand.findByIdAndDelete(brandId)
      .then(removedBrand=> {
        if (!removedBrand) return res.status(404).send({message: "The show does not exist"})
        return res.status(200).send({brand: removedBrand})
      })
      .catch(err => res.status(500).send({message: "Error while deleting"}))
  }
}

module.exports = controller