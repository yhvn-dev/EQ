import React from 'react'
import { NavLink } from 'react-router-dom'

function Db_Header({left,middle,right}) {
  return (
    <header className='w-full h-full center col-start-2 col-span-full row-start-1 row-end-1  shadow-lg rounded-lg'>
        <div className="center w-full h-full">{left}</div>
        <div className="center w-full h-full">{middle}</div>
        <div className="flex items-center justify-start flex-row-reverse w-full h-full">{right}</div>            
    </header>
  )
}

export default Db_Header