import {useState, useEffect} from 'react'
import * as userService from "../../services/eqServices"
import UserSidebar from "../../components/userSidebar"
import Db_Header from "../../components/db_header"
import {Plus} from "lucide-react"
import Pfp from "../../assets/Images/FB_IMG_1636622871797.jpg"

function Dashboard() {

   return (
    <section className='h-screen w-screen grid grid-cols-[10rem_1fr]  grid-rows-[1fr_3fr_6fr] gap-4 overflow-y-hidden '>

     <Db_Header right={
        <>
        <img src={Pfp} className='w-10 mx-4 cursor-pointer border-1 border-[var(--moon-phases-d)] h-auto rounded-full'/>
        <p className='text-sm'>Username</p>
        </>
     }/> 
      <UserSidebar/>
    
      <main className="full shadow-lg column-t row-start-2 row-end-3 col-start-2 col-span-full overflow-y-hidden" >
     
        <nav className="w-full center h-[30%] p-2 ">
          <div className='full center-l'>Reports</div>
          <div className='full flex items-center justify-start flex-row-reverse'>
            <button   className='shadog-lg px-4 py-2  cursor-pointer rounded-xl center hover:bg-[var(--moon-phases-e)] bg-[var(--moon-phases-d)] stroke="#fff"'><Plus size={18}  fill='#fff' /></button>
          </div>
        </nav>
      
        <div className='column-t overflow-y-auto overflow-x-auto bg-red-100' >
          <table className='eq-table table-fixed md:max-w-full md:w-full lg:max-w-full lg:w-full '>
            <thead>
              <tr className='tr-th shadow-lg bg-[var(--white-blple)]'>
                <th className='p-4  font-semibold'>Date Time</th>
                <th className='p-4  font-semibold'>Depth</th>
                <th className='p-4  font-semibold'>DetailLink</th>
                <th className='p-4  font-semibold'>Latitude</th>
                <th className='p-4  font-semibold'>Location</th>
                <th className='p-4  font-semibold'>Longtitude</th>
                <th className='p-4  font-semibold'>Magnitude</th>
              </tr>
            </thead>

           
              
             
          </table>
        </div>
       
        
      </main>
    </section>
  )
}

export default Dashboard