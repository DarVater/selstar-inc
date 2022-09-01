const {Router} = require('express')
const router = Router()
const LendingData = require('../models/LendingData')
const config = require('config')
const {check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

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
            const {token, lendingSettings } = req.body
            const newData = lendingSettings

            if (!token) {
                return res.status(401).json({message: NOT_LOGIN})
            }
            const decoded = jwt.verify(token, config.get('jwtSecret'))
            const  userId  = decoded.userId
            const  password  = decoded.password

            const user = await User.findOne({userId})
            if (!user) {
                return res.status(400).json({message: "Such user not fined!"})
            }
            const isMatch = await  bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({message: "Wrong password!"})
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