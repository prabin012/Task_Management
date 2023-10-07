import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = React.createContext();

const AppProvider = ({children}) => {

 const [List, setList] = useState(null);
 const [task, setTask] = useState(null);
 const [listId, setListID]= useState();
 const [listget, setListget] = useState();
 const [allList, setAllList] = useState();


  return <AppContext.Provider value={{
    List, setList,
    task, setTask,
    listId, setListID,
    listget, setListget,
    allList, setAllList
    }}>
      {children}
    </AppContext.Provider>
  
}
export {AppContext,AppProvider}
