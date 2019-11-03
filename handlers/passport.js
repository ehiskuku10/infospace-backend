const passport = require('passport')
const User = require('../models/User')
const passportJWT = require('passport-jwt')
const LocalStrategy = require('passport-local').Strategy
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, cb) {
        return User.findOne({ email, password })
        .then(user => {
            if (!user) {
                return cb(null, false, {
                    message: 'Incorrect email or password.'
                })
            }
            return cb(null, user, { message: 'Logged In Successfully' })
        })
        .catch(err => cb(err))
    }
))


passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET
    },
    function (jwtPayload, cb) {
        return User.findById(jwtPayload.id)
        .then(user => {
            return cb(null, user)
        })
        .catch (err => {
            return cb(err)
        })
    }
))