import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = React.createContext();

const AppProvider = ({children}) => {

 const [List, setList] = useState(null);
 const [task, setTask] = useState(null);
 const [listId, setListID]= useState();
 const [listget, setListget] = useState();
 const [allList, setAllList] = useState();
 const [notic, setNotic] = useState();


 const showalltask =async(id)=>{
  try {
    const res = await axios.get(`api/gettasks/${id}`)
    setTask(res.data)
  } catch (error) {
    console.log(error)
  }
}

  return <AppContext.Provider value={{
    List, setList,
    task, setTask,
    listId, setListID,
    listget, setListget,
    allList, setAllList,
    notic, setNotic,
    showalltask
    }}>
      {children}
    </AppContext.Provider>
  
}
export {AppContext,AppProvider}
