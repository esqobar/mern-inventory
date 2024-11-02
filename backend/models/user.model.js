import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    dept: {
        type: String,
        required: true,
        enum: {
            values: ["Warehouse", "Maintenance", "Production", "Silo"],
            message: "Please Add A User Department",
        },
    },
    isAdmin: {
        type: String,
        required: true,
        default: false,
    },
    procurement: {
        type: Boolean,
        required: true,
        default: false,
    },
},
    { timestamps: true, }
)

//to match password entered by a user with the hashed password in the db
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model("User", userSchema);
export default User;