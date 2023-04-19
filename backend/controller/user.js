import User from '../model/UserModel.js'
import sendToken from '../utils/jwt-token.js'
import Meet from '../model/MeetModel.js'

export const register = async(req, res) => {
    try {
        const { username, password , email, name, mobile } = req.body    
    
        const newusername = await User.findOne({username})
        const newemail = await User.findOne({email})

        if(newusername) return res.status(201).json("Username existed")  
        if(newemail) return res.status(201).json("email existed")

        const newuser = new User({username, password, email, name, mobile})
        
        await newuser.save()
        res.status(200).json(newuser)

    } catch (error) {
        return res.status(500).send(error)
    }
}

export const login = async(req,res) => {
    try {

        const { email, password } = req.body
        const user = await User.findOne({email})


        if(!user || user.password!=password) return res.status(201).json("email or password is incorrect")
        sendToken(user,200,res)

    } catch (error) {
        return res.status(500).send(error)
    }
}

export const logout = async(req,res) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
          });
          res.status(200).json({
            success: true,
            message: "Logged Out",
          });
    } catch (error) {
        return res.status(500).send(error)
    }
}


export const meeting = async(req,res) => {
    try {
        const checkmeet = await Meet.findOne({username:req.user.username})
        if(checkmeet) return res.status(201).json("Meeting already scheule")

        const newMeet = new Meet({username:req.user.username})
        await newMeet.save()
        return res.status(200).json(newMeet)
    } catch (error) {
        return res.status(500).send(error)
        
    }
}