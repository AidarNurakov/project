const mongoose = require('mongoose')
const schema = mongoose.Schema

const categorySchema = new schema({
    name: {
        type: String,
        required: true
    }
})

exports.Category = mongoose.model("Category", categorySchema)