const  User  = require('../models/user-model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { secret } = require("../config")
const { validationResult } = require('express-validator')


generateAccessToken = (id) => {
    const payLoad = { id }
    return jwt.sign(payLoad, secret, {expiresIn: "10m"} )
}

exports.registration = async function(req,res) {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({message: "Ошибка при регистрации", errors})
        }
        const {username, password} = req.body
        const candidate = await User.findOne({username})
        if(candidate){
            return res.status(400).json({message:"Пользователь с таким именем уже существует!"})
        }
        const hashPassword = bcrypt.hashSync(password, 7)
        const user = new User({username, password: hashPassword})
        await user.save()
        return res.json({message: "Пользователь успешно зарегистрирован"})
    }catch(e){
        console.log(e)
        res.status(400).json({message: "Registration error"})
    }
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

exports.checkUser = async function(req,res){
    const { token } = req.body;

    res.status(200).json({
      message: 'Токен правильный',
      success: true
    })
  }