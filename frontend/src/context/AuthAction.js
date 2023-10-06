const loginstart =(userCreaditional)=>({
    tpye:"LOGIN_START",
});
const loginsuccess =(userdata)=>({
    type:"LOGIN_SUCCESS",
   payload:userdata,
});

const loginfalure =()=>({
    type:"LOGIN_FAILURE",
});

const getUser = (userInfo)=>({
    type:"GET_DETAIL",
    payload:userInfo,
})