import React from 'react'
import { useEffect } from 'react'
import * as userService from "../../services/eqServices"

function Feed() {

  useEffect(() =>{
    fetchEQ()
  },[])

  const fetchEQ = async () =>{
      try { 
        const data = await userService.eqAll()
        console.log(data)
    } catch (error) {
      console.error("Error Fetching EQ")
    }
  }
   return (
    <section className='w-screen h-screen grid-cols-1fr grid-rows'>

    

    </section>
  )
}

export default Feed