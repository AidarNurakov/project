const {Product} = require('../models/product.js')
const {Favorite} = require('../models/favorites.js')
const axios = require('axios').default


exports.createProduct = async function(product){
    try{
        console.log('Перед поиском продукта', product)
       
        const productExists = await Product.findOne({
            name: product.name  
        })
        console.log('После поиска продукта', productExists)
    
        if(productExists){
            return {
                message: "Данная позиция была добавлена ранее!",
                status: 'failed',
                data: {}
            }
        }
        const newProduct = await Product.create({
            name: product.name,
            category: product.category
        })
        return {
            message: "Товар успешно создан",
            status: "success",
            data: newProduct
        }
    }catch(e){
        console.log("Ошибка с сервиса при создании продукта", e.message)
        return {
            message: e.message,
            data: null,
            status: 'failed'
        }
    }
  
}

exports.getProducts = async function() {
    try{
        const products = await Product.find()
        return products
    }catch(e) {
        console.log(e.message)
    }
}

exports.addProductToFavorite = async function(id, favorite) {
    try{
        const alreadyFavorite = await Favorite.findById(id)
        if(alreadyFavorite) {
            return {
                message: "Данный товар уже в избранных!",
                status: 'failed',
                data: {}
            }
        }
        const newFavorite = await Favorite.create({
            user: favorite.user,
            favorites: favorite.favorites
        })
        return {
            message: "Товар успешно добавлен в избранные",
            status: "success",
            data: newFavorite
        }
    }catch(e){
        console.log("Ошибка с сервиса при добавлении в избранные", e.message)
        return {
            message: e.message,
            data: null,
            status: 'failed'
        }
    }
}

exports.getFavoriteProducts = async function(){
    try{
        const apiUrl = 'http://localhost:5000/auth/check-user';
        //если локалхост не работает попробовать по айпи ноута
        const result = await axios.post(apiUrl, {
            token: '123'
        });

        console.log(result.data);

        if (data.success) {
            // ищем фейворит через модельку  
        } else {
            // кидаем ошибку
        }
    }catch(e){
        console.log(e.message)
    }
}

exports.getProductById = async function(id){
    try{
        const result = await Product.findById(id)
        return result
    }catch(e){
        console.log(e.message)
    }
    
}

exports.deleteProductById = async function(id){     
    try{
        const removedProduct =  await Product.findByIdAndDelete(id)
        return removedProduct
    }catch(e){
        
    }
    
}
