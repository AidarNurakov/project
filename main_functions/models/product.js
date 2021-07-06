const mongoose = require('mongoose')
const schema = mongoose.Schema

const productSchema = new schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true
    }
})

exports.Product = mongoose.model('Product', productSchema)