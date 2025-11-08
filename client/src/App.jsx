import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Feed from "./pages/Feed/feed"

import './index.css'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
