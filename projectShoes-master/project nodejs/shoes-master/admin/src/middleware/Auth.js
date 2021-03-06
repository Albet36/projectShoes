const Account = require("../app/Models/Account");
const jwt = require('jsonwebtoken');
function requireAuth(req, res, next) {
    if (!req.cookies.userId) {
        res.redirect('http://localhost:2002/login');
        return;
    }
    const user = Account.findOne({ id: req.cookies.userId });
    if (!user) {
        res.redirect('http://localhost:2002/login');
        return;
    }
    next();
}
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
module.exports = { requireAuth, checkUser }
