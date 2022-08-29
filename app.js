const express = require('express')
const config = require('config')
const mongoose = require("mongoose");

const app = express()

const PORT = config.get('port') || 5000

async function start() {
    try {
        console.log(mongoose.connect)
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
