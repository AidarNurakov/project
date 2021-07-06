const  User  = require('./user-model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { secret } = require("./config")

generateAccessToken = (id) => {
    const payLoad = { id }
    return jwt.sign(payLoad, secret, {expiresIn: "10m"} )
}

exports.login = async function(req, res){ 
        try {
            const {username, password } = req.body
            const user = await User.findOne({username})
            if(!user) {
                return res.status(400).json({message: `Пользователь ${username} не найден`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword) {
                return res.status(400).json({message: `Введен неверный пароль`})
            }
            const token = generateAccessToken(user._id)
            return res.json({token})

        } catch (e) {
            console.log(e.message)
            res.status(400).json({
                message: 'Login error'
            })
        }
    }