import {useState, useEffect } from 'react'
import * as userService from "../../services/eqServices"
import Sidebar from "../../components/sidebar"
import Header from "../../components/db_header"
import {Plus} from "lucide-react"


function Feed() {
  const [eq,setEq] = useState([])
  const [openLogin,setOpenLogin] = useState(false);

  useEffect(() =>{
    fetchEQ()
  },[])

  const fetchEQ = async () =>{
      try { 
        const data = await userService.eqAll()
        const eqData = data.data.data
        console.log(eqData)
        setEq(eqData)
    } catch (error) {
      console.error("Error Fetching EQ")
    }
  }

  console.log(eq)
   return (
    <section className='full grid grid-cols-1fr grid-rows-[3rem_3rem_80vh] gap-4 overflow-y-hidden'>

      <Sidebar/>
      <Header left={
        <>
          Quakes
        </>}

      middle={
        <>
        search
        </>
      }
      right={<>
      profile
      </>}/>

      <main className="full shadow-lg column-t row-start-3 row-end-3 col-start-1 col-end-1 overflow-y-hidden" >
        
        <nav className="w-full center h-[30%] p-2 ">
          <div className='full center-l'>EarthQuakes</div>
          <div className='full flex items-center justify-start flex-row-reverse'>
            <button className='shadog-lg px-2 py-1 rounded-xl center bg-[var(--moon-phases-d)] stroke="#fff"  '><Plus size={18}  fill='#fff'/></button>
          </div>
        </nav>
      
        <div className='column-t overflow-y-auto overflow-x-auto' >
          <table className='eq-table table-fixed lg:max-w-full lg:w-full '>
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

           <tbody className='w-full overflow-hidden'>
              {eq.length > 0 && eq.map((e)=>{
                return (
                  <>
                  <tr className='td-tr'>
                    <td className="text-sm px-4 py-1 text-wrap wrap-break-word break-normal lg:text-wrap lg:wrap-break-word">{e.dateTime}</td>
                    <td className="text-sm px-4 py-1 text-wrap wrap-break-word break-normal lg:text-wrap lg:wrap-break-word">{e.depth}</td>
                    <a href={e.detailLink} className="text-sm px-4 py-1 text-wrap wrap-break-word break-normal lg:text-wrap lg:wrap-break-word">{e.detailLink}</a>
                    <td className="text-sm px-4 py-1 text-wrap wrap-break-word break-normal lg:text-wrap lg:wrap-break-word"></td>
                    <td className="text-sm px-4 py-1 text-wrap wrap-break-word break-normal lg:text-wrap lg:wrap-break-word">{e.location}</td>
                    <td className="text-sm px-4 py-1 text-wrap wrap-break-word break-normal lg:text-wrap lg:wrap-break-word"></td>
                    <td className="text-sm px-4 py-1 text-wrap wrap-break-word break-normal lg:text-wrap lg:wrap-break-word"></td>
                  </tr>
                  </>
                )
              })}

            </tbody>
           
              
           
            
          </table>
        </div>
       
        
      </main>
    </section>
  )
}

export default Feed