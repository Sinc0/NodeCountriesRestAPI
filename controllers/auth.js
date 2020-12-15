const token = require('../token');
const { v4: uuidv4 } = require('uuid');

exports.createToken = (req, res, next) => {
    const generatedToken = uuidv4();

    //should create post in db
    const tkn = new token({ 
        ip: req.ip,
        id: generatedToken,
        createdAt: new Date()
    });
    
    tkn.save();

    res.render('token', {
        token: generatedToken
    });
}