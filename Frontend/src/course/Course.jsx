import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Courses from '../components/Courses'


const Course = () => {
    
  return (
    <div className='  dark:bg-slate-900 dark:text-white'>
    <Navbar/>
    <div className='min-h-screen '>
      <Courses/>
    </div>
    <Footer/>
    </div>
  )
}
export default Course