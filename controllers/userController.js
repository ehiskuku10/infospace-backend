const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcrypt')
const validate = require('../handlers/validator')

exports.validateRegister = async (req, res, next,) => {
    validate(req, res)

    // Now check if there already exist a user with this email
    const user = await User.findOne({
        email: req.body.email
    })
    if (user) {
        return res.status(400).json({
            message: "An account already exist for this email"
        })
    }

    next(); // there were no errors!
}

exports.register = async (req, res, next) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    
    const user = new User({
        email: req.body.email,
        fullname: req.body.fullname,
        password: hashedPassword,
        created: Date.now()
    })

    await user.save()
    res.status(201).json({
        message: "Successfully Created User",
        user
    })
}
