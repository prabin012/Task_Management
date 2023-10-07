import mongoose from "mongoose";

const database =()=>{
    mongoose.connect('mongodb://localhost:27017/Tasks')
    .then(()=>{
        console.log("database connected")
    }).catch((e)=>{
        console.log(e)
    })
}
export default database