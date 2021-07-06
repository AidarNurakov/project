const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')


const {router} = require('./routes/api.js')

app.use(bodyParser.json())
app.use(express.json())
app.use('/api', router)

const PORT = process.env.PORT || 5050

const dbUrl = 'mongodb+srv://homelander:Drmirmid@cluster0.mski2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

async function start() {
    try{
        await mongoose.connect(dbUrl, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
        })
          .then(() => console.log("Подключился к базе данных"))

        app.listen(5050, () => {
            console.log(`Приложение запущено на ${PORT} порту `)
        })
        
    }catch(e) {
        console.log("Ошибка при запуске:", e.message)
        process.exit(1)
    }
}

start()