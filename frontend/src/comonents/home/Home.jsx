import Tasks from '../tasks/Tasks'
import './home.css'
import {tasks} from '../../dummy.js'
import {list} from '../../dummy.js'
import Lists from '../lists/Lists'
import { Link, Outlet } from 'react-router-dom'
import { useContext, useState } from 'react'
import Addtask from '../addTask/Addtask';
import AddList from '../addTask/AddList'
import {AiFillCloseCircle,AiFillDelete,AiOutlineLogout} from "react-icons/ai";
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

const Home = () => {
  const [open , setOpen] = useState(false);
  const {logout, userdata} = useContext(AuthContext)
  const name = userdata.users.name
  const uid = userdata.users._id;
  const logoutHandle =()=>{
    logout();
    window.location.reload();
  }
const deletJandle =async()=>{
  try {
    const res = await axios.delete(`http://localhost:7550/userdelet/${uid}`)
    setOpen(res.data);
   setTimeout(() => {
    setOpen(false)
   }, 2000);
    logout();
  } catch (error) {
    console.log(error)
  }
  window.location.reload();
 
}
  return (
    <div>
        {<h1>{open}</h1>}
     <div className="homepage">
    
      <div className="homeContainer">
      <div className="homeItem">
        <span className="listTittle">Task Lists</span>
        <span className="tasktittle">Tasks</span>
        <div className="divUSer">
        <span className="setting1 sname">{name}</span>
        {/* <span className="setting1"><AiFillCloseCircle/></span> */}
        <span className="setting1 de" onClick={deletJandle} ><AiFillDelete/></span>
        <span className="setting1" onClick={logoutHandle}><AiOutlineLogout/></span>
        </div>
      
      </div>
      <div className="homeBody">
        <div className="homeSidebar">
        <Lists/>
        
        </div>
        <div className="HomeTaskContainer">
       <Tasks/>
        </div>
      </div>

      <div className="bodyBottom">
        <div className="createList">
          <AddList/>
          <Addtask/>
        </div>
      </div>
      </div>
     
     </div>
    </div>
  )
}

export default Home
