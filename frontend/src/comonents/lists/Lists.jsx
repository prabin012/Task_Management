import { useContext, useEffect, useRef, useState } from 'react'
import './list.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { AppContext } from '../../context/AppContext'
import {AiFillCloseCircle} from "react-icons/ai";

const Lists = () => {

  const {List, setList,task, setTask,listId, setListID,listget,allList, setListget,setAllList} = useContext(AppContext);

  console.log(allList)

  const showtask =async(id)=>{
    try {
      const res = await axios.get(`api/gettasks/${id}`)
      setTask(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    showtask();
  },[])

  const deletItemHAndle =async(id)=>{
    try {
      // console.log(id)
      const res = await axios.delete(`api/deletelist/${id}`)
      alert("list deleted")
      // showtask();
    } catch (error) {
      console.log(error)
    }
    window.location.reload();
  }
  if(!List) return null;
  const lists = List.isList;

  return (
    <div>
      <div className="listItems">
        {lists.map((list)=>{
          return (
            <div className='l23'>
            <div className="keyList lists" key={list.id} onClick={()=>{
              showtask(list._id)
              setListID(list._id)
              setAllList(list)
              }}>
              <span className="lists1"> {list.tittle} </span>
              
            </div> 
            <div className='lists12' onClick={()=>deletItemHAndle(list._id)}> <span  ><AiFillCloseCircle/></span></div>
           
            </div>
          )
        })}
          
        </div>
    </div>
  )
}

export default Lists
