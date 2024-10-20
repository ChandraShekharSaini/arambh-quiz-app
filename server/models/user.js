import mongoose, { Schema } from 'mongoose'
const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
        unique: true
    }
})

const Users = mongoose.model("user",userSchema);

export default Users;