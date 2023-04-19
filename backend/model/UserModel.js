import mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        require: [true, "Please provide unique Username"],
        unique: [true, "Username exist"]
    },
    email:{
        type: String,
        require: [true, "Please provide email"],
        unique: [true, "email existed"]
    },
    password:{
        type: String,
        require: [true, "Please provide a password"],
        unique: false
    },
   
    name:{
        type: String,
        require: [true, "Please provide your name"],

    },
    mobile:{
        type: String,
        require: [true, "Please provide contact no"]
    }
})

const User = mongoose.model('User', UserSchema)

export default User