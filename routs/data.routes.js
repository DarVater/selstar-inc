const {Router} = require('express')
const uuid = require('uuid')
const path = require('path')
const router = Router()
const LendingData = require('../models/LendingData')
const config = require('config')
const {check, validationResult, body} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const checkToken = async (token) => {
    console.log(token)
    if (!token) {
        return false
    }
    const decoded = jwt.verify(token, config.get('jwtSecret'))
    const  userId  = decoded.userId
    const  password  = decoded.password

    const user = await User.findOne({userId})
    if (!user) {
        return false
    }
    const isMatch = await  bcrypt.compare(password, user.password)
    return isMatch
}

// /api/data/lending
router.get(
    '/lending',
    async (req, res) =>{
        try {
            const lendingData = await LendingData.findOne()
            res.json(lendingData.data)
        } catch (e) {
            res.status(500).json({message: "Something veit wrong! Try agan"})
        }
    }
)

// /api/data/saveImage
router.post(
    '/saveImage',
    async (req, res) =>{
        try {

            const isMatch = checkToken(req.body.token)
            if (!isMatch) {
                return res.status(400).json({message: "Wrong token!"})
            }
            const img = req.files["myFile"]
            let fileName = uuid.v4() + '.' + img.name.split('.').pop()


            const lendingData = await LendingData.findOne()

            let newData = JSON.parse(lendingData.data)
            newData[req.body.part][req.body.item].file = fileName
            lendingData.data = JSON.stringify(newData)
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            await lendingData.save().then(savedDoc => {
                res.json({newData, message: {acknowledged: true, savedDoc, fileName}})
            }).catch( e => {
                    console.log('Don\'t saved')
                    res.json({newData, message: {acknowledged: false,  e} })
                }
            );
        } catch (e) {
            res.status(500).json({message: "Something veit wrong! Try agan"})
        }
    }
)

// /api/data/update
router.post(
    '/update', //))
    async (req, res) =>{
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Wrong data through login!'
                })
            }
            if (req.files) {
                const {img} = req.files
            }
            const {token, lendingSettings } = req.body
            let changeData = lendingSettings
            // changeData['header']['startBtn'].link =  '#'


            let newData = changeData // changeData lendingSettings
            console.log(newData)
            const isMatch = checkToken(body.token)
            if (!isMatch) {
                return res.status(400).json({message: "Wrong token!"})
            }
            const lendingData = await LendingData.findOne({});
            lendingData.data = JSON.stringify(newData)
            await lendingData.save().then(savedDoc => {
                console.log('saved')
                res.json({newData, message: {acknowledged: true, savedDoc}})
            }).catch( e => {
                console.log('Don\'t saved')
                res.json({newData, message: {acknowledged: false,  e} })
                }
            );

        } catch (e) {
            console.log('________________________________________________-')
            console.log(e)
            res.status(500).json({message: "Something veit wrong! Try agan"})
        }
    }
)

module.exports = router