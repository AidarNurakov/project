const express = require('express')
const router = express.Router()
const {check} = require('express-validator')

const {
    registration
} = require('../controllers/registration')

const {
    getCategories,
    createCategory,
    getCategoryById
} = require('../controllers/category.js')

const {
    getProducts,
    getProductById,
    deleteProductById,
    createProduct,
    getProductsByCategoryId,
    addProductToFavorite,
    getFavoriteProducts
} = require('../controllers/product.js')

// Регистрация пользователя

router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min:4, max:10})]
    , registration)



// энд пойнты для категорий------------------------------

//получить все категории
router.get('/categories', getCategories)

//Создать категорию
router.post('/category', createCategory);

//получить категорию по айди
router.get('/get-category/:id', getCategoryById)



// энд пойнты для товаров---------------------------------

//получить все товары
router.get('/products', getProducts)

//получить товар по айди
router.get('/products/:id', getProductById)

//создать товар
router.post('/create-product', createProduct)

//удалить товар по айди
router.delete('/products/:id', deleteProductById)

//Получить все товары в одной категории
router.get('/products-by-category/:id', getProductsByCategoryId)

//добавить товар в избранное 
router.post('/products/add-favorite/:id', addProductToFavorite)



exports.router = router