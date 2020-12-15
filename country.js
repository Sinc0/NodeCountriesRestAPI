const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    id: Number,
    name: String,
    population: String,
    capital: String,
    area: String,
    currency: String
},
{
    versionKey: false
});

module.exports = mongoose.model('Country', countrySchema);