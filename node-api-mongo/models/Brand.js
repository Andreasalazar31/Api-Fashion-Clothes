let mongoose = require('mongoose')
let Schema = mongoose.Schema

let BrandSchema = Schema ({
  "name": String,
  "origin": String,
  
})

module.exports = mongoose.model('Brand', BrandSchema, 'Brand')