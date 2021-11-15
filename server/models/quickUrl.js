const mongoose = require("mongoose")
const nanoid = require('nanoid')

// Define schema
const quickUrlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    shortId: {
        type: String,
        required: true,
        default: nanoid.nanoid(10)
    },
    visits: {
        type: Number,
        required: true,
        default: 0,
    },
    attempts: {
        type: Number,
        required: true,
        default: 0,
    }
})

// Create model TODO: REFACTOR CAPITALISATION
const QuickUrl = mongoose.model("QuickUrl", quickUrlSchema)

// Export modules
module.exports = QuickUrl