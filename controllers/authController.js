const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const jwtVerify = require('../handlers/jwtVerify')
const User = require('../models/User')
const validate = require('../handlers/validator')

exports.login = async (req, res, next) => {
    validate(req, res)

    const user = await User.findOne({
        email: req.body.email
    })
    if (!user) return res.status(400).json({ message: "Invalid Email or Password!" })

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).json({ message: "Invalid Password" })

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    return res.header('auth-token', token).status(201).json({
        message: "You are Successfully LoggedIn",
        token
    })
}

exports.isLoggedIn = async (req, res, next) => {
    jwtVerify(req, res, next)
}