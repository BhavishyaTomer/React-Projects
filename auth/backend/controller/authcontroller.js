const User = require('../models/userSchema');
const jwt = require("jsonwebtoken")
const handleError = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
    console.log(err)
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'net ninja secret', {
        expiresIn: maxAge
    });
}

const getLogin = async () => { }

const postLogin = async (req,res) => {
    const { email, password } = req.body;
    try {
    const user=await User.login(email,password)
    const token = createToken(user._id)
    res.status(201).json({Ticket:token,Status:"VALID"})
    } catch (error) {
     res.status(400).json({Error:error,Status:"INVALID"})
    }
}

const getSignUp = async () => { }

const postSignUp = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password })
        const token = createToken(user._id)
        console.log("token is ",token)
        res.status(201).json({ Ticket:token });

    } catch (error) {
        const errors = handleError(error)
        res.status(400).json({ errors })
    }
}

module.exports = {
    getLogin,
    postLogin,
    getSignUp,
    postSignUp
}