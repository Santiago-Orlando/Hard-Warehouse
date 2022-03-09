const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { UserModel } = require("../db/modules/Users")
const { validPassword } = require("../lib/passwordUtils")

const customFields = {
    usernameField: 'email',
    passwordField: 'password'
};

const verifyCallback = async ( email, password, done ) => {

    try {
        const user = await UserModel.findOne({ email }) 
        if (!user) done(null, false)
    
        const isValid = validPassword(password, user.password, user.salt)
        if (isValid) done(null, user)
    
        return done(null, false)
        
    } catch (error) {
        done(err)
    }
}
        


const strategy = new LocalStrategy(customFields, verifyCallback)

passport.use(strategy)


passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser( async (userId, done) => {
    try {
        
        const user = await UserModel.findById(userId)
        if(user) done(null, user);
        
    } catch (error) {
        return done(error)
    }
});

module.exports = passport