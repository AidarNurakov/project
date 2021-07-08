const Router = require('express')
const router = new Router()
const {check} = require('express-validator')


const { 
  login,
   checkUser, 
   registration } = require('../controllers/authController')
   
const authMiddleware = require('../middleware/authMiddleware')

// Регистрация пользователя
router.post('/registration', [
  check('username', "Имя пользователя не может быть пустым").notEmpty(),
  check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min:4, max:10})]
  , registration)

//энд поинт для входа
router.post('/login', login)

// //энд поинт аутентификации
router.post('/check-user', authMiddleware)

module.exports = router