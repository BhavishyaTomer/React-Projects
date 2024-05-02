const User=require('../models/userSchema');

const handleError=(err)=>{
console.log(err.message, err.code);
let errors = { email:'', password:'' };
console.log(err)
if (err.message.includes('user validation failed')) {
Object.values(err.errors).forEach(({properties}) => {
errors [properties.path]=  properties.message;
});
}
return errors;
}

const getLogin =async () => { }

const postLogin = async () => {
    const { email, password } = req.body;
    try {
        
    } catch (error) {
        
    }
}

const getSignUp =async () => { }

const postSignUp =async (req,res) => {
    const { email, password } = req.body;
    try {
   const user=await User.create({ email, password })
   res.status(201).json({user})
    } catch (error) {
    const errors=handleError(error)
    res.status(400).json({errors})
    }
}

module.exports = {
    getLogin,
    postLogin,
    getSignUp,
    postSignUp
}