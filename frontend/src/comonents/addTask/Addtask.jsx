import { useContext, useEffect, useRef, useState } from 'react'
import './edittask.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

const Addtask = () => {
    const tittle = useRef();
    const [atask, setAtask] = useState(false);
    const {List, setList,task, setTAsk,listId, setListID,listget} = useContext(AppContext);
   
    const submitHandle =async(e)=>{
        e.preventDefault();
        const data ={
          tittle:tittle.current.value
      }
        try {
            const res = await axios.post(`http://localhost:7550/addTask/list/${listId}`, data)
            alert("Task added..")
        } catch (error) {
           console.log(error) 
        }
    }
   
  return (
    <div>
      <div className="assTask">
        {atask &&  <form action="" className="fdata" onSubmit={submitHandle}>
            <input type="text" className="formInput addbtn tskbtn" placeholder='Add Task' ref={tittle}/>
            <button type='submit' className="addbtn btns">Add</button>
            <button onClick={()=>setAtask(false)} className="addbtn">Cancel</button>
           
        </form>}
        <button  className="addbtn btns" onClick={()=> setAtask(!atask)}>Add Task</button>
        
      </div>
    </div>
  )
}

export default Addtask
