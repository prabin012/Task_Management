import mongoose from "mongoose";

const userTask = new mongoose.Schema({

    ListId:{
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

export const Tasks = mongoose.model('Tasks', userTask);