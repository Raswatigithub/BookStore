import React from 'react'
import Card from './Card'
import list from '../../public/list.json';
import {Link} from 'react-router-dom';

const Courses = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 py-4   dark:bg-slate-900 dark:text-white'>
        <div className='mt-28 items-center justify-center tex-center '>
            <h1 className='text-2xl md:text-4xl'>
                Lorem ipsum dolor <span className='text-yellow-500'>sit amet!!!.</span>
            </h1>
           <p className='mt-12' >
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia commodi numquam quasi eveniet tempore minima placeat, impedit porro iusto quae? Optio nobis nam voluptatibus eos, laudantium deserunt autem consequuntur unde eligendi eaque ut laborum ducimus animi doloremque neque esse ab quasi, vel expedita rerum voluptatem inventore minus sunt eum! Adipisci?
           </p>
            <Link to={'/'}>
            <button className='mt-6 bg-warning px-4 py-2 rounded-md items-center justify-center hover:bg-black hover:text-white'>Back https://www.youtube.com/watch?v=Uc9HnJVyrqE</button>
            
            </Link>
            
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
            {
               list.map((item)=>(
                <Card  key={item.id} item={item}/>
               ))
            }
        </div>
     </div>
    </>
  )
}

export default Courses