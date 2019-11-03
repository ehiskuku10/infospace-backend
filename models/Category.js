const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: "Provide a title for this category",
        unique: true,
        trim: true
    },
    stories: [{ type: mongoose.Schema.ObjectId, ref: 'Story' }]
})


module.exports = mongoose.model('Category', categorySchema)