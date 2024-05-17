//imports
const token = require('./models/tokenSchema')


//validate token
module.exports = async(req, res, next) => {
    
    //debugging
    // console.log(req.ip)
    // console.log(req.headers)
    // console.log(req.body)
    // console.log(req.query)
    // console.log(req.baseUrl)
    
    //variables
    let tkn = req.query.token
    let tokenIsValid = 1
    // let tkn = req.headers.token || req.body.token

    //check token exists
    let checkToken = await token.find({id: tkn})
    
    //token is valid
    if(checkToken.length == tokenIsValid) { next() }

    //token is NOT valid
    else 
    { 
        //log
        console.log("(Unknown User) " + req.ip + " requests " + "/country")

        //send response
        res.json({ error: 'token is invalid' })
    }
}