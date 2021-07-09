const mongoose = require('mongoose')
const schema = mongoose.Schema

const favoriteProductsSchema = new schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    favorites: [{
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }]
});

exports.Favorite = mongoose.model('Favorite', favoriteProductsSchema)


