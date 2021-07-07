const mongoose = require('mongoose')
const schema = mongoose.Schema

const favoriteProductsSchema = new schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    favorites: {
        type: Array,
        default: [],
        ref: "Product"
    }
});

exports.Favorite = mongoose.model('Favorite', favoriteProductsSchema)



// {
//   user: id,
//   favorites: [
//     'id1',
//     'id2'
//   ]
// }



//В массиве должны быть айди товаров добавленных в избранное