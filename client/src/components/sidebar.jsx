import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className='w-full h-full center col-start-1 col-span-full row-start-2 row-end-2 '>

        <div className="w-[20%] center">LOGO</div>
        <div className='w-full flex items-center justify-evenly '>
            <NavLink className={({isActive}) => (`text-white shadow-lg rounded-xl bg-[var(--metal-dark4)] center px-4 py-1 ${isActive ? 
                "text-white bg-[var(--moon-phases-d)]" : "bg-gray-100"}`)} to="/">Feed</NavLink>


            <NavLink className={({isActive}) => (`rounded-xl  center px-4 py-1  ${isActive ? 
                "bg-[var(--moon-phases-d)]" : "bg-gray-100"}`)} to="/login">My Reports</NavLink>
        </div>
        
    </aside>
  )
}

export default Sidebar