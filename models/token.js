//imports
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tokenSchema = new Schema({
    ip: String,
    id: String,
    createdAt: Date
},
{
    versionKey: false
})

//export
module.exports = mongoose.model('Token', tokenSchema)