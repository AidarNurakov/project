const User = require('../models/user')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')

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

