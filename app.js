const express = require('express')
const config = require('config')
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload')
const path = require("path");

const app = express()

app.use(express.json({ extended: true}))

app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static' )))
app.use(fileUpload({}))
app.use('/api/data', require('./routs/data.routes'))
app.use('/api/auth', require('./routs/auth.routes'))

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'),
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        app.listen(PORT, () => {
            console.log(`App has been started at ${PORT}...`)
        })
    } catch (e) {
        console.log("Server error", e.message)
        process.exit(1)
    }
}
start()
