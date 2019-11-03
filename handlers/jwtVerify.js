const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports = async (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        return res.json({
            err_message: "Access Denied!"
        })
    }
    const verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET)
    const user = await User.findOne({ _id: verifiedToken._id })
    if (!user) {
        return res.json({
            err_message: "Access Denied!"
        })
    }
    req.user = user
    return next()
}