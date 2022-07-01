const Account = require("../models/Account");
const jwt = require('jsonwebtoken');

const checkUser = (req, res, next) => {
    const Token = req.cookies.userId;
    if (Token) {
        jwt.verify(Token, process.env.JWT_ACCESS_KEY,
            async (err, decodedToken) => {
                if (err) {
                    res.locals.user = null;
                    next();
                }
                else {
                    let user = await Account.findById(decodedToken._id);
                    res.locals.user = user.toObject();
                    next();
                }
            })
    }
    else {
        res.locals.null;
        next();
    }
}
module.exports = { checkUser }
