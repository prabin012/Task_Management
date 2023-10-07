import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { AppContext } from '../../context/AppContext';
const AddList = () => {
  const tittle = useRef();
  const [olist, setOlist] = useState(false)
  const { userdata } = useContext(AuthContext);
  const { setList, setNotic } = useContext(AppContext);
  const userid = userdata.users._id

  const getList = async () => {
    try {
      const res = await axios.get(`api/getlist/${userid}`)
      setList(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getList()
  }, [])
  const submitHandle = async (e) => {
    e.preventDefault();
    const data = {
      tittle: tittle.current.value
    }
    try {
      const res = await axios.post(`api/addlist/${userid}`, data)
      setNotic(res.data.message)
    } catch (error) {
      console.log(error)
    }
    setTimeout(() => {
      window.location.reload();
    }, 1000)
  }
  return (
    <div>
      <div className="assTask">

        {olist && <form action="" className="fdata" onSubmit={submitHandle}>
          <input type="text" className="formInput addbtn" placeholder='Add Task List' ref={tittle} required />
          <button type='submit' className="addbtn btns">Add</button>
          <button onClick={() => setOlist(false)} className="addbtn">Cancel</button>
        </form>}
      </div>
      <button className="addbtn btns" onClick={() => setOlist(!olist)}>Add Task List</button>
    </div>
  )
}

export default AddList
