//imports
const { v4: uuidv4 } = require('uuid')
const token = require('../models/tokenSchema.js')

//exports
exports.create = async(req, res, next) => {
    //log
    console.log(req.ip + " requests " + "/token")

    //variables
    let clientIp = req.ip
    let date = new Date()
    let uuid = uuidv4()

    //set token
    let newToken = new token({ ip: clientIp, id: uuid, createdAt: date })
    
    //update db
    newToken.save()

    //send response
    res.status(201).json({ token: uuid }) 
}