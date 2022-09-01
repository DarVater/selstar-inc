
const {Schema, model } = require('mongoose')

const schema = new Schema({
    data: {type: String, required: true},
})

module.exports = model("LendingData", schema)
