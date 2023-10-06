import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = React.createContext();

const AppProvider = ({children}) => {

 const [List, setList] = useState(null);
 const [task, setTAsk] = useState(null);
 const [listId, setListID]= useState();
 const [listget, setListget] = useState();


  return <AppContext.Provider value={{
    List, setList,
    task, setTAsk,
    listId, setListID,
    listget, setListget
    }}>
      {children}
    </AppContext.Provider>
  
}
export {AppContext,AppProvider}
