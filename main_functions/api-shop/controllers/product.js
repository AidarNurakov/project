const {
    createProduct,
    getProducts,
    addProductToFavorite,
    getFavoriteProducts,
    deleteProductById,
    getProductById
} = require('../services/product.js')

const {
    getCategoryById
} = require('../services/category')

exports.createProduct = async function (req, res) {
    try {
        const productData = {
            ...req.body
        }
        console.log(req)
        const result = await createProduct(productData)
        res.status(201).json(result)

    } catch (e) {
        res.status(500).json({
            message: "Ошибка сервера" + e.message
        })
    }

}

exports.getProducts = async function (req, res) {
    try {
        const products = await getProducts()
        res.status(200).json({
            message: "Получены все товары",
            data: products
        })
    } catch (e) {
        console.log(e.message)
    }
}


exports.addProductToFavorite = async function (req, res) {
    try {
        const productExists = await getProductById(req.body.productId)
        if (!productExists) {
            return res.status(404).json({
                message: "Товар по данному id не существует"
            })
        }
        const token = req.headers.Authorization
        // const token = req.headers.Authorization.split(' ')[1];
        // token

        console.log('token: ', token);

        res.send('ok');
        // const favoritesData = {}

        // if (token) {
        //     const favoritesData = {
        //         ...req.body
        //     }
        //     const result = await addProductToFavorite(favoritesData)
        //     res.status(201).json(result)

        // }
        // return res.status(404).json({
        //     message: "Данный пользователь не существует либо не авторизован!"
        // })
    } catch (e) {
        res.status(500).json({
            message: "Ошибка сервера" + e.message
        })
    }
}

exports.getFavoriteProducts = async function (req, res) {}

exports.getProductById = async function (req, res) {
    try {
        const result = await getProductById(req.params.id)
        if (result) {
            return res.status(200).json(result)
        }
        res.status(404).json({
            message: "Продукт не найден"
        })
    } catch (e) {
        console.log(e.message)
    }

}

exports.deleteProductById = async function (req, res) {
    const removed = await deleteProductById(req.params.id)
    if (removed) {
        return res.status(200).json({
            message: "Продукт успешно удален"
        })
    }
    res.status(404).json({
        message: "Не удалось удалить продукт"
    })

}

exports.getProductsByCategoryId = async function (req, res) {

    const category = await getCategoryById(req.params.id);

    if (!category) {
        return res.status(404).json({
            message: 'Данная категория не найдена!'
        })
    }

    const products = await getProducts()
    const result = products.filter(item => item.category == req.params.id)

    res.status(200).json({
        success: true,
        data: {
            category: category.name,
            products: result
        }
    })
}