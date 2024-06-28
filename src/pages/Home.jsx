import React from 'react'
import img1 from "../assets/image.png"
import RowContent from './RowContent'

const Home = () => {
    return (
        <div className='w-10/12 flex flex-col m-auto justify-center'>

            <img
                className=' object-fit flex justify-center rounded'
                src={img1} alt="" />

            
            <h1 className='text-2xl font-bold my-8'>Latest Post</h1>
            <hr />            
            <RowContent/>
        
        <div className='w-full flex justify-center my-8'>
            <button className='border border-gray-800 shadow shadow-blue-500 text-gray-600 w-fit rounded px-4 py-2' >Viwe More</button>
            </div>
        </div>
    )
}

export default Home
