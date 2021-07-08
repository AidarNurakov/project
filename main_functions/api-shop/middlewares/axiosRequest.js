const axios = require('axios').default
module.exports = async function (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const apiUrl = 'http://localhost:5000/auth/check-user'
    const response = await axios.post(apiUrl, null, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    if (response.data.success) {

      console.log('Сессия действительна: ', response.data.user)
      req.user = response.data.user

      return next();
    } else {
      res.status(401).json({
        message: 'Вы не авторизованы'
      })
    }

  } catch (e) {
    console.log(e.message)
    res.status(500).send('Server Error')
  }
}