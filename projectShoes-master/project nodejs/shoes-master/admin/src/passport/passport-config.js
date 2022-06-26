const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');
const Account = require('../app/Models/Account');
function authenticateUser(passsport) {
    const authenticateUser = (username,password,done) => {
    const user = getUserByUsername(username)
        if(user == null){
            return done(null,false,{message:'No user that username'})
        }
        try {
            if(await bcrypt.compare(password,Account.password)){
                return done(null,user)
            }
            else{
                return done(null, false,{message: 'password incorrect'})
            }
        } catch (error) {
            return done(e)
        }
    }
}

function initialize(passport) {
    passport.use(new LocalStrategy({ usernameField:'username'}),authenticateUser)
    passport.serializeUser((user,done) => {})
    passport.deserializeUser((id,done) => {})
}
module.exports = initialize;