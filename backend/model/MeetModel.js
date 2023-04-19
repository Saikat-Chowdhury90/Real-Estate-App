import mongoose, { Mongoose } from "mongoose";

export const MeetSchema = new mongoose.Schema({
    username:{
        type:String
    }
})

const Meet = mongoose.model('Meet', MeetSchema)

export default Meet