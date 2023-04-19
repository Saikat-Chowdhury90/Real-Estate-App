import Jwt  from "jsonwebtoken";
import User from "../model/UserModel.js";

export const isAuthenticated = async (req,res,next) => {
    try {
        
        const { token } = req.cookies


        if(!token) return res.status(401).json("Please login")
        // if(!token) return next(new Error("error"))
        
        const decodedData = Jwt.verify(token, "taylorswift")

        req.user = await User.findOne({username:decodedData})
    
        next()

    } catch (error) {
        res.status(500).send(error)
    }

}