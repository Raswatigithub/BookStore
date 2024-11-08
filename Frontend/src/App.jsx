import React from 'react'
import Home from './home/Home'
import {Route, Routes} from 'react-router-dom';
import Course from './course/Course';
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  return (
   <div className=' dark:bg-slate-900 dark:text-white'>
  
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={<Course/>}/>
    {/* <Route path='/login' element={<Login/>}/> */}
    <Route path='/signup' element={<SignUp/>}/>
   </Routes>
   
   </div>
  )
}

export default App