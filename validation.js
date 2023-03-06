//imports
const { v4: uuidv4 } = require('uuid')
const token = require('./models/token.js')

module.exports = async(req, res, next) => {
    //debugging
    console.log(req.ip)
    console.log(req.headers)
    console.log(req.body)

    //variables
    let tkn = req.headers.token || req.body.token
    let tokenIsValid = 1

    //check if token exists
    let checkToken = await token.find({id: tkn})
    
    if(checkToken.length == tokenIsValid)
    {
        next()
    }
    else
    {
        console.log("(Unknown User) " + req.ip + " requests " + "/country")
        res.json({ error: 'token is invalid' })
    }
}


