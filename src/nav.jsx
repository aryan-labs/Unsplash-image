import React, { useContext } from 'react'
import {StoreContext} from './context'
import './index.css'

const Nav = () => {
    const {darkTheme,setDarkTheme,IoSunnyOutline,FaRegMoon,}=useContext(StoreContext);
    const toggleTheme=()=>{
        const newTheme=!darkTheme;
        setDarkTheme(newTheme)
        const body=document.querySelector('body');
  body.classList.toggle('dark',newTheme)
    }
     
  return (
    <div className='night-icon' >
        {darkTheme?<div onClick={toggleTheme}><FaRegMoon></FaRegMoon></div>:<div onClick={toggleTheme} className=''><IoSunnyOutline></IoSunnyOutline></div>}
      
    </div>
  )
}

export default Nav;
