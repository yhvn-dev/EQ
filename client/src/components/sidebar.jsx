import React from 'react'
import { NavLink } from 'react-router-dom'
import {TableOfContents,ClipboardMinus } from "lucide-react"

function Sidebar() {
  return (
    <aside className='w-full h-full center col-start-1 col-span-full row-start-2 row-end-3 shadow-lg '>

        <div className="w-[20%] center">LOGO</div>
        <div className='w-full flex items-center justify-evenly '>
            <NavLink className={({isActive}) => (`text-[0.8rem] column  text-white shadow-lg rounded-xl bg-[var(--metal-dark4)] center px-2 py-2 ${isActive ? 
                "text-white bg-[var(--moon-phases-d)]" : "bg-white"}`)} to="/">
                  
                    <TableOfContents size={24}/> 
                        <span className="py-2">Feed</span>           
            </NavLink>

            <NavLink className={({isActive}) => (`text-[0.8rem] column rounded-xl  center  px-2 py-2  ${isActive ? 
                "bg-[var(--moon-phases-d)]" : "bg-white"}`)} to="/login">  
                <ClipboardMinus size={24}/>
                <span className="py-2">My Reports</span>
            </NavLink>
        </div>
        
    </aside>
  )
}

export default Sidebar