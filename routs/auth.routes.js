const {Router} = require('express')
const User = require('../models/User')
const router = Router()
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

// /api/auth/register
router.post(
    '/register',
    [
        check('email', "Wrong email type!").isEmail(),
        check('password', "Password length must be mo then 6 characters!")
            .isLength({min: 6}),

    ],
    async (req, res) =>{
        try {
            console.log(req.body)
            const errors = validationResult(req)
            console.log(errors)
            if (!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Wrong data through registration!'
                })
            }
            const {email, password} = req.body

            const candidate = await User.findOne({email})
            if (candidate) {
                return res.status(400).json({message: "Such user already used!"})
            }
            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({email, password: hashedPassword})

            await user.save()

            res.status(201).json({message: "A user has been created"})

        } catch (e) {
            res.status(500).json({message: "Something veit wrong! Try agan"})
        }
    }
)

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Type correct email!').normalizeEmail().isEmail(),
        check('password', 'type password').exists()
    ],
    async (req, res) =>{
        console.log(req.body)
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Wrong data through login!'
                })
            }
            const {email, password} = req.body

            const user = await User.findOne({email})
            if (!user) {
                return res.status(400).json({message: "Such user not fined!"})
            }
            const isMatch = await  bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({message: "Wrong password!"})
            }
            console.log(password, user.password)
            const token = jwt.sign(
                {userId: user.id, password: password},
                config.get('jwtSecret'),
                {expiresIn: '1d'}
            )
            res.json({token, userId: user.id})

        } catch (e) {
            res.status(500).json({message: "Something veit wrong! Try agan"})
        }
    }
)

module.exports = router