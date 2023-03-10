//imports
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//set schema
const countrySchema = new Schema({
    id: Number,
    name: String,
    population: String,
    capital: String,
    area: String,
    currency: String
},
{ versionKey: false })

//exports
module.exports = mongoose.model('Country', countrySchema)