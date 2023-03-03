//imports
const token = require('../models/token.js')
const { v4: uuidv4 } = require('uuid')

exports.createToken = (req, res, next) => {
    let generatedToken = uuidv4()
    let tkn = new token({ 
        ip: req.ip,
        id: generatedToken,
        createdAt: new Date()
    })
    
    tkn.save()

    res.render('index', { token: generatedToken })
}