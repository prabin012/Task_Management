import { useContext, } from 'react'
import './list.css'
import axios from 'axios'
import { AppContext } from '../../context/AppContext'
import { AiFillCloseCircle } from "react-icons/ai";

const Lists = () => {
  const { List, showalltask, setListID, setAllList,setNotic } = useContext(AppContext);
  const showtask = async (id) => {
    showalltask(id)
  }
  const deletItemHAndle = async (id) => {
    try {
      const res = await axios.delete(`api/deletelist/${id}`)
      setNotic(res.data)
    } catch (error) {
      console.log(error)
    }
    setTimeout(() => {
      window.location.reload();
    }, 1000)
  }
  if (!List) return null;
  const lists = List.isList;
  return (
    <div>
      <div className="listItems">
        {lists.length > 0 ? (
          lists.map((list) => {
            return (
              <div className='l23' key={list.id}>
                <div className="keyList lists" onClick={() => {
                  showtask(list._id)
                  setListID(list._id)
                  setAllList(list)
                }}>
                  <span className="lists1"> {list.tittle} </span>
                </div>
                <div className='lists12' onClick={() => deletItemHAndle(list._id)}> <span  ><AiFillCloseCircle /></span></div>
              </div>
            )
          })) : <h1 className='notificationbord-1'>No list !</h1>}
      </div>
    </div>
  )
}

export default Lists
