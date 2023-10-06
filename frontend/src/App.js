import { BrowserRouter as BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Register from "./authentication/Register";
import Login from "./authentication/Login";
import Home from "./comonents/home/Home";

import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
function App() {
  const { userdata } =useContext(AuthContext);
  return (
  <>
    <BrowserRouter>
     <Routes>
      <Route exact path="/" element={userdata? <Home/>:<Register/>} />
      <Route path="/login" element={userdata ?  <Navigate to="/" />: <Login/>}></Route>
      <Route path="/register" element={userdata ?  <Navigate to="/" /> : <Register />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
