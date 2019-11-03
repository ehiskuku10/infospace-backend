const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const storySchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: "Provide a title for this story",
        trim: true
    },
    content: {
        type: String,
        unique: true,
        required: "Provide content for this story",
        trim: true
    },
    publisher: {
        type: String,
        required: "Provide an author for this story",
        trim: true
    },
    source_link: {
        type: String,
        required: "Provide source link to this story",
        trim: true
    },
    story_image_url: {
        type: String,
        required: "Provide URL image URL for this story",
        trim: true
    },
    Readers: [{ type: mongoose.Schema.ObjectId,  ref: 'User'}],
    date_posted: Date
})


module.exports = mongoose.model('Story', storySchema)