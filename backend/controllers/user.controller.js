import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.util.js";
import jwt from 'jsonwebtoken'

export const signup = asyncHandler(async (req, res) => {
    const { name, email, password, dept } = req.body;

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(403)
        throw new Error("User Already Exists");
    }

    const user = await User.create({
        name, email, password, dept
    })

    if (user) {
        const token = generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            dept: user.dept,
            procurement: user.procurement,
            isAdmin: user.isAdmin,
            token: token
        })
    } else {
        res.status(400)
        throw new Error("Invalid User Data");
    }

})

export const signin = asyncHandler(async(req, res) => {
    const {email, password } = req.body

    const user = await User.findOne({ email })
    if(user && (await user.matchPassword(password))){
        const token = generateToken(res, user._id)

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            dept: user.dept,
            procurement: user.email,
            isAdmin: user.isAdmin,
            token: token
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})