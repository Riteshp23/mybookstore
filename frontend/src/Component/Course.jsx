import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
 
  return (
    <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 text-black' >
     <div className='pt-32 items-center justify-center text-center '>
     <h1 className='text-2xl   md:text-4xl'>We are delighted to have you <span className='text-pink-500'>here! :)</span></h1>
     <p className='mt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, delectus? Nostrum consequuntur, sunt vel, voluptate atque voluptatem quaerat animi ut velit ipsum odio asperiores explicabo sapiente magnam deserunt alias quia.</p>
     
     <Link to="/"><button className='bg-pink-400 text-white px-4 py-2 rounded-xl hover:bg-pink-700 duration-300 mt-6'>Back</button></Link>
     </div>
      <div className='mt-6 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item)=>(<Cards key={item.id} item={item }></Cards>))
        }
      </div>
     </div>
    </>
  )
}

export default Course
