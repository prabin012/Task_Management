import React, { createContext, useEffect, useReducer, useState } from 'react'
import { Cartreducer } from '../reducer/Reducer';
import { AppReducer } from './AuthReducer';

const INITIAL_STATE ={
    userdata:JSON.parse(localStorage.getItem("user")) || null,
    userInfo:null,
    isLoading:false,
    error:false
  }

const AuthContext = React.createContext();


const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);


  const [userinfo , setUserinfo] = useState(null);
  const [islogout, setIslogout] = useState(false);

    const logout =()=>{
        localStorage.removeItem("user");
        setIslogout(true)
      }
      useEffect(()=>{
        logout()
      
      },[])
      
      useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.userdata))
        // getinfo()
      },[state.userdata])

  
  return <AuthContext.Provider value={{userdata:state.userdata,
    userInfo:state.userInfo,
isLoding:state.isLoading,
errror:state.error,
dispatch,
userinfo , setUserinfo,
logout,
islogout, setIslogout}}> {children}</AuthContext.Provider>
  
}

export {AuthContext, AuthProvider}
