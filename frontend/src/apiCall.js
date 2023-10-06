import axios from "axios";
const URL = "http://localhost:7550"
export const apicall =async(userCreaditional, dispatch)=>{
    dispatch( {type: "LOGIN_START" });
try {
    const res =await axios.post(`${URL}/login`, userCreaditional)
    dispatch({type:"LOGIN_SUCCESS", payload:res.data})
} catch (error) {
    dispatch({type:"LOGIN_FAILURE", error}) 
}
}