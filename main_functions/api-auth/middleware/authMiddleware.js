const jwt = require('jsonwebtoken')
const {secret} = require('../config.js')

module.exports = function (req,res, next) {
    try{
        const token = req.headers.authorization.split(' ')[1]
        
        if(!token){
            return res.status(200).json({
                message: 'Сессия не действительна',
                success: false,
                user: null
            })
        }

        const decodedData = jwt.verify(token, secret)
        
        if (decodedData) {
            res.status(200).json({
                success: true,
                user: decodedData
            })
        } else {
            res.status(200).json({
                success: false,
                user: null
            })
        }
    } catch(e) {
        console.log(e)
        return res.status(403).json({message: "Пользователь не авторизован"})
    }
}