//imports
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//set schema
const tokenSchema = new Schema({ ip: String, id: String, createdAt: Date },{ versionKey: false })

//exports
module.exports = mongoose.model('Token', tokenSchema)