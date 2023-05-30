import React from 'react'

import Xizmatlar from "../SecondaryPages/Xizmatlar"


import { Routes, Route } from "react-router-dom"

export function ShowPage() {
  return (
    <div className='ShowPage'>
      <Routes>
        {/* <Route path='/' element={}/>
          <Route path='/' element={}/>
          <Route path='/' element={}/>
          <Route path='/' element={}/> */}
        <Route path='/xizmatlar' element={Xizmatlar} />
      </Routes>
    </div>
  )
}
