import React from 'react'
import img1 from "../assets/image.png"
import RowContent from './RowContent'

const Blog = () => {
  return (
    <div className='w-10/12 flex flex-col m-auto justify-center'>

            <div className='w-full flex justify-center'>
            <img
                className=' object-fit flex justify-center rounded'
                src={img1} alt="" 
            />
            <div className='absolute w-full top-[55%] left-[20%] '>
                <p className='text-xl font-bold bg-blue-500 rounded-xl w-fit px-4 py-1 my-2'>Technology</p>
                <p className='text-2xl font-bold w-6/12 my-2'>The Impact of Technology on the Workplace: How Technology is Changing in now days using AI</p>
                <p className='flex gap-2 items-center'><span className='w-8 h-8' ><img className='w-8 h-8 object-fit rounded-full' src={img1} alt="" /></span>Jarvis Desai<span></span> <span>28 June 2024</span></p>
            </div>
            </div>

            
            <h1 className='text-2xl font-bold my-8'>Latest Post</h1>
            <hr />            
            <RowContent/>
        
        <div className='w-full flex justify-center my-8'>
            <button className='border border-gray-800 shadow shadow-blue-500 text-gray-600 w-fit rounded px-4 py-2' >Viwe More</button>
            </div>
        </div>
  )
}

export default Blog
