const { v4: uuidv4 } = require('uuid');
const token = require('./token');

module.exports = async(req, res, next) => {
    //console.log(req.ip);
    //console.log(req.headers);
    //console.log(req.headers.token);
    //console.log(uuidv4());
    //console.log(req.body);

    let tkn = req.headers.token || req.body.token;
    //console.log(tkn);
    let checkToken;
    let tokenIsValid = 1;

    //check if token exists
    checkToken = await token.find({id: tkn});
    //console.log(checkToken);
    
    if(checkToken.length == tokenIsValid)
    {
        next();
    }
    
    else
    {
        console.log("(Unknown User) " + req.ip + " requests " + "/country");

        res.json({
            error: 'token not provided or token is invalid'
        });
    }
}


