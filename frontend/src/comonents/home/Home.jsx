import Tasks from '../tasks/Tasks'
import './home.css'
import Lists from '../lists/Lists'
import { useContext, useState } from 'react'
import Addtask from '../addTask/Addtask';
import AddList from '../addTask/AddList'
import { AiFillDelete, AiOutlineLogout } from "react-icons/ai";
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { AppContext } from '../../context/AppContext'

const Home = () => {
  const [open, setOpen] = useState(false);
  const { logout, userdata } = useContext(AuthContext)
  const [show, setShow] = useState("Click on list to show the list's task !!")
  const { allList, notic, } = useContext(AppContext);
  const name = userdata.users.name
  const uid = userdata.users._id;

  setTimeout(() => {
    setShow(false)
  }, 5000)

  const logoutHandle = () => {
    logout();
    window.location.reload();
  }
  const deletJandle = async () => {
    try {
      const res = await axios.delete(`api/userdelet/${uid}`)
      setOpen(res.data);
      setTimeout(() => {
        setOpen(false)
      }, 2000);
      logout();
    } catch (error) {
      console.log(error)
    }
    window.location.reload();
    if (!allList) return null;
  }
  return (
    <div>
      {<h1>{open}</h1>}
      <div className="homepage">
        <div className="homeContainer">
          <div className="homeItem">
            <span className="listTittle">Task Lists</span>
            <span className="tasktittle">Tasks <span className='tt'>{allList ? allList.tittle : null}  {show}</span></span>
            <div className="divUSer">
              <span className="setting1 sname">{name}</span>
              <span className="setting1 de" onClick={deletJandle} ><AiFillDelete /></span>
              <span className="setting1 fe" onClick={logoutHandle}><AiOutlineLogout /></span>
            </div>
          </div>
          <div className="homeBody">
            <div className="homeSidebar">
              <Lists />
            </div>
            <div className="HomeTaskContainer">
              {notic ? <div className="notic">
                <span className="niticmeassage">{notic}</span>
              </div> : null}
              <Tasks />
            </div>
          </div>
          <div className="bodyBottom">
            <div className="createList">
              <AddList />
              {allList ? <Addtask /> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
