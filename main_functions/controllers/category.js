const {
    getCategories,
    createCategory,
    getCategoryById
} = require('../services/category.js')


exports.getCategories = async function (req, res) {
    try {
        const categories = await getCategories()
        res.status(200).json({
            message: "Получены все категории",
            data: categories
        })
    } catch (e) {

    }
}

exports.createCategory = async function (req, res) {
    try {
        const categoryData = {
            ...req.body
        };


        const result = await createCategory(categoryData);

        res.status(201).json(result)
    } catch (e) {
        res.status(500).json({
            message: 'Ошибка сервера: ' + e.message
        })
    }

}

exports.getCategoryById = async function (req, res) {
    try {
        const category = await getCategoryById(req.params.id)
        if (category) {
            res.status(200).json(category )
        }
        res.status(200).json(category)
        return category
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }

}