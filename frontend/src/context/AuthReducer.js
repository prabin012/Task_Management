
export const AppReducer = (state, action)=>{
    switch (action.type) {
        case "LOGIN_START":
            return {
                userdata:null,
            isloading:true,
            error:false,
        }
        case "LOGIN_SUCCESS":
            return{
                userdata:action.payload,
            isloading:false,
            eror:false,
           
        }
        case "LOGIN_FAILURE" :
            return{
                userdata:null,
                isloading:false,
                error:true
            }

        case "START_FEETCHING":
            return{
                userinfo:null,
                isloading:true,
                error:false,
            }
        case "GET_DETAIL":
            return{
                userinfo:action.payload,
                isloading:false,
                error:false,
            }
        case "FAILED":
            return{
                userinfo:null,
                isloading:false,
                error:true,
            }

        default:
            return state;
    }
}