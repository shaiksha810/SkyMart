import React from 'react'
import { Routes,Route } from 'react-router'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/products' element={<Shop />}/>
            <Route path='/about' element={<About />}/>
        </Routes>
    </div>
  )
}

export default AppRouter