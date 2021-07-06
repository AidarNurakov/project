const Router = require('express')
const router = new Router()
const { login } = require('./authController')

router.post('/login', login);

router.post('/check-user', (req, res) => {
  const { token } = req.body;

  res.status(200).json({
    message: 'Токен правильный',
    success: true
  })
})

module.exports = router