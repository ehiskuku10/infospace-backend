const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
const validator = require('validator')

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid Email Address'],
        required: 'Please Supply an email address'
    },
    fullname: {
        type: String,
        required: 'Please supply a full name',
        trim: true
    },
    password: {
        type: String,
        required: 'Please supply a password'
    },
    // my_collections: [{ type: mongoose.Schema.ObjectId, ref: 'Story' }],
    // my_favs: [{ type: mongoose.Schema.ObjectId, ref: 'Story' }],
    isLoggedIn: Boolean,
    created: Date,
    updated: Date,
    resetPasswordToken: String,
    resetPasswordExpires: Date
})


module.exports = mongoose.model('User', userSchema)