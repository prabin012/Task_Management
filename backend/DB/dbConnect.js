import mongoose from "mongoose";

const database =()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/Tasks')
    .then(()=>{
        console.log("database connected")
    }).catch((e)=>{
        console.log(e)
    })
}
export default database