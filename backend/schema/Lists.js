import mongoose from "mongoose";

const userTask = new mongoose.Schema({

    userID:{
        type:String,

    },
    tittle:{
        type:String,
        require:true,
        trim: true,
    },
},
{
    timestamps:true
}
)

export const Lists = mongoose.model('List', userTask);