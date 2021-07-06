const {Category} = require('../models/category')

exports.getCategories = async function() {
    try{
        const categories = await Category.find()
        return categories
    }catch(e) {

    }
}

exports.getCategoryById = async function(id) {
    try{
        const singleCategory = await Category.findById(id)
        return singleCategory
    }catch(e) {
        console.log(e.message)
    }
}

exports.createCategory = async function (category) {

    try {
      console.log('Перед поиском категории', category)
  
      const categoryExists = await Category.findOne({
        name: category.name
      });
  
      if (categoryExists) {
        return {
          message: 'Данная категория была добавлена ранее!',
          status: 'failed',
          data: {}
        }
      }
  
      const newCategory = await Category.create({
        name: category.name
      });
  
      return {
        message: 'Категория успешно создана',
        status: 'success',
        data: newCategory
      }
  
    } catch (e) { 
      console.log('ERROR FROM Category', e.message)
      return {
        message: e.message,
        data: null,
        status: 'failed'
      }
    }
  }