import React from 'react'
import Home from './home/Home'
import { Routes,Route } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './Component/Signup'


function App() {
  return (
    <>
    <div className='dark:bg-slate-700  dark:text-white text-black   bg-white'>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/course" element={<Courses></Courses>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      </div>
    </>
  )
 }

export default App
