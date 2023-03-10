//imports
const country = require('../models/countrySchema.js')
const mongoose = require('mongoose')

//variables
const dbTokens = mongoose.connection.collection('tokens')

//exports
exports.all = async(req, res, next) => {
    //log
    console.log(req.ip + " requests " + "/all")
    
    //debugging
    console.log(req.query)
    
    //variables
    let tkn = req.query.token
    
    //get all countries data
    let data = await country.find()
    
    if(data.length == 0) //error check
    {
        //send response
        res.status(404).json({ error: '404 countries not found' }) 
    }
    else 
    {
        //clean country obj
        for(let c in data)
        {
            data[c] = {
                id: data[c].id,
                name: data[c].name,
                population: data[c].population,
                captial: data[c].captial,
                area: data[c].area,
                currency: data[c].currency
            }
        }
        
        //send response
        res.status(201).json({
            type: 'all',
            countries: data
        })
    
        //increment endpoint usage counter
        await dbTokens.updateOne({id: tkn}, {$inc: {"/all": 1}})
    }
}

exports.specific = async(req, res, next) => {
    //log
    console.log(req.ip + " requests " + "/specific")

    //debugging
    console.log(req.query)
    
    //variables
    let countryIsArray = Array.isArray(req.query.name)
    let specificCountry = req.query.name
    let tkn = req.query.token
    
    if(specificCountry == null)
    {
        //send response
        res.status(404).json({ error: 'country not specified' }) 
    }
    else if(countryIsArray == false)
    {
        //lowercase handling
        specificCountry = specificCountry.toLowerCase()

        //uppercase handling
        if (specificCountry == "usa") { specificCountry = "USA" }
        else { specificCountry = specificCountry[0].toUpperCase() + specificCountry.substring(1)}

        //get country data
        let data = await country.find({name: specificCountry})
    
        if(data.length == 0) //error check
        { 
            //send response
            res.status(404).json({ error: '404 country not found' }) 
        }
        else
        {
            //send response
            res.status(201).json({ 
                type: 'specific', 
                country: { 
                    id: data[0].id, 
                    name: data[0].name, 
                    population: data[0].population, 
                    capital: data[0].capital, 
                    currency: data[0].currency 
                }
            })

            //increment endpoint usage counter
            await dbTokens.updateOne({id: tkn}, {$inc: {"/specific": 1}})
        }
    }
    else
    {
        //send response
        res.status(404).json({ error: 'this endpoint does not support multiple countries' })
    }
}

exports.multiple = async(req, res, next) => {
    //log
    console.log(req.ip + " requests " + "/multiple")

    //debugging
    console.log(req.query)
    
    //variables
    let countryIsArray = Array.isArray(req.query.name)
    let countriesArray = []
    let countries = req.query.name
    let tkn = req.query.token

    if(countryIsArray == true)
    {
        for(let c in countries)
        {
            //uppercase handling
            if(countries[c] == "") { countries[c] = null }
            else if (countries[c] == "usa") { countries[c] = "USA" }
            else { countries[c] = countries[c][0].toUpperCase() + countries[c].substring(1)}

            //get country data
            let data = await country.find({name: countries[c]})
            
            //error check
            if(data.length != 0)
            {
                //set countries obj
                countries[c] = { 
                    id: data[0].id, 
                    name: data[0].name, 
                    population: data[0].population, 
                    capital: data[0].capital, 
                    currency: data[0].currency 
                }

                //add country to array
                countriesArray.push(countries[c])
            }
        }

        if(countriesArray.length == 0) //error check
        { 
            //send response
            res.status(404).json({ error: '404 countries not found' }) 
        }
        else
        {
            res.status(201).json({type: 'multiple', countries: countriesArray })

            //increment endpoint usage counter
            await dbTokens.updateOne({id: tkn}, {$inc: {"/multiple": 1}})
        }
    }
    else
    {
        //send response
        res.status(404).json({ error: 'this endpoint does not support a single country' })
    }
}