import React, { createContext, useState } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
export const StoreContext=createContext();

const StoreContextProvider = (props) => {
    const [darkTheme,setDarkTheme]=useState(false)
    const [searchItem,setSearchItem]=useState('cat')
const contextValue={
    darkTheme,
    setDarkTheme,
    IoSunnyOutline,
    FaRegMoon,searchItem,setSearchItem
}
  return (
    <div>
      <StoreContext.Provider value={contextValue}>
      {props.children}
      </StoreContext.Provider>
    </div>
  )
}

export default StoreContextProvider;
