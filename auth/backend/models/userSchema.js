const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
const { isEmail } = require('validator')
const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email is not unique"],
        lowercase: true,
        validate: [isEmail, "Email is not correct"]
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minLength: [6, "password should be 6 length"]
    }
})


userSchema.pre('save', async function (next) {
    console.log("new user is created and saved");
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})


userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if (user) {
        const status = await bcrypt.compare(password, user.password)
        if (status) {
            return user
        }
        throw Error("Incorrect Password")
    }
    throw Error("Can't Find Email");
}

module.exports = mongoose.model('User', userSchema)