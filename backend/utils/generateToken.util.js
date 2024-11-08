import jwt from "jsonwebtoken";

const generateToken = (res, userId) =>{
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

    // setting JWT as HTTP-Only cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict', // prevents csrf attacks
        maxAge: 30 * 24 * 60 * 60 * 1000, //30 Days
    })
    return token
}

export default generateToken