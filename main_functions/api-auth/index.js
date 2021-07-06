const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter.js')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const dbURL = 'mongodb+srv://homelander:Drmirmid@cluster0.mski2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const start = async function () {
    try {
        await mongoose.connect(dbURL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        app.listen(PORT, () => {
            console.log(`Server has been started on ${PORT} port`)
        })

    } catch (e) {
        console.log(e)
    }
}

start()