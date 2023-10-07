import './task.css'
import { tasks } from '../../dummy.js'
import { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { AppContext } from '../../context/AppContext'
import { AiFillEdit,AiFillDelete,AiFillMinusCircle } from "react-icons/ai";

const Tasks = () => {
  const tittle = useRef();
  const { task, setTAsk } = useContext(AppContext);
  const [taskId, setTaskid] = useState(null);
  const [tdone, setTdone] = useState();
  const [update, setUpdate] = useState(false)
  const [check, setCheck] =useState(false)
  const [data, setData] = useState({
    tittle: ""
  });
  if (!task) return null;
  const tasks = task.isTasks;
  const delethandle = async (id) => {
    console.log(id)
    try {
      const res = await axios.delete(`api/delettask/list/${id}`)
      alert("deleted successfully...")
    } catch (error) {
      console.log(error)
    }
  }
  const editHandle = async(e) => {
    e.preventDefault();
    console.log(taskId)
    const datatittle={
      tittle:tittle.current.value
    }
    try {
      const res = await axios.post(`api/updatetask/list/${taskId}`,datatittle)
      alert("updated successfully...")
      setTimeout(()=>{
        setUpdate(false)
      })
    } catch (error) {
      console.log(error)
    }
  }
  const changeHandle = (e) => {
    setData(e.target.value)
  }
  const checked =(id)=>{
    setTdone(id)
    setCheck(!check)
    
  }
  console.log(tdone)
  return (


    <div>
      <div className="taskItems">
        {update && <form className='areas' onSubmit={editHandle}>
          <textarea type="text" className="updateinput txdt formInput" value={data} onChange={changeHandle} ref={tittle}  rows="5"/>
       
          <button className="editTask" type='submit'>edit task</button>
          <button className="editTask" onClick={()=>setUpdate(false)}>Cancel</button>
        </form>
        }
        { tasks.length>0?(
          tasks.map((tasks) => {
            return (
              <div className="tasks" >
                <label className={'tastDescription'}>{tasks.tittle}</label>

                <div className="taskbtn">
                <input type="checkbox" className="editTask" onChange={()=>checked(tasks._id)}></input>
                  <span className="editTask" onClick={() => {
                    setUpdate(!update);
                    setData(tasks.tittle);
                    setTaskid(tasks._id);
                  }}><AiFillEdit/></span>
                  <span className="editTask" onClick={() => delethandle(tasks._id)}><AiFillDelete/></span>
                </div>

              </div>
            )
          })
        ):(<h1 className='notificationbord'>No Task !</h1>)
        }

      </div>
    </div>
  )
}

export default Tasks
