import React from 'react'
import img1 from "../assets/image.png"

const Footer = () => {
    return (

        <div className='w-full bg-black/70 '>


        <div className='w-10/12  flex flex-col m-auto bg-black/70  justify-center '>


            <div className='w-full flex justify-between'>

                <div className='w-1/4 p-4'>
                    <h1 className='font-bold my-4'>About</h1>
                    <p className='font-bold my-4 text-justify
                     text-gray-500' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate optio at consectetur tempora numquam recusandae fugiat mollitia amet sequi dolores iure quae esse exercitationem eveniet quisquam vero odio, perspiciatis sapiente.</p>
                    <p className='text-gray-500'><span className='font-bold text-white'>Email : </span>Email</p>
                    <p className='text-gray-500'><span className='font-bold text-white'>Email : </span>Email</p>
                </div>

                <div className='w-1/4 p-4 flex '>

                    <div>
                        <h1 className='font-bold my-4'>Quick Link</h1>
                        <p className='text-gray-500'>Data</p>
                        <p className='text-gray-500'>Data</p>
                        <p className='text-gray-500'>Data</p>
                        <p className='text-gray-500'>Data</p>
                        <p className='text-gray-500'>Data</p>
                        <p className='text-gray-500'>Data</p>
                    </div>

                    <div>
                        <h1 className='font-bold my-4'>Quick Link</h1>
                        <p className='text-gray-500'>Data</p>
                        <p className='text-gray-500'>Data</p>
                        <p className='text-gray-500'>Data</p>
                        <p className='text-gray-500'>Data</p>
                        <p className='text-gray-500'>Data</p>
                        <p className='text-gray-500'>Data</p>
                    </div>

                </div>

                <div className='w-1/4 p-4 h-fit bg-[#171b38] my-4'>
                    <h1 className='font-bold my-4 text-center'>Quick Link</h1>
                    <p className='text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cupiditate.</p>
                    <div className='flex flex-col items-center'>
                        <input
                            className='w-4/5 p-1 my-2 text-sm rounded bg-black/60'
                            placeholder='Your Email'
                            type="text"
                        />
                        <button className='w-4/5 py-1 bg-blue-500 text-center rounded'>Subscribe</button>
                    </div>
                </div>

            </div>

            <div className='w-full flex justify-between my-4'>
                <div className='w-1/2 flex gap-4 justify-center'>
                    <div>
                        <img className='w-10 h-10 object-fit rounded-full' src={img1} alt="" />
                    </div>

                    <div>
                        <p>Jarvis Desai </p>
                        <p className='text-gray-500'>Collaborator & editor</p>
                    </div>
                </div>

               <div className='flex w-1/2 gap-8'>
                <p>Terms of Use</p>
                <p> Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>All Right Resevers {new Date().getFullYear()}</p>
               </div>
               

            </div>

            <hr className='my-4 border-blue-500' />
        </div>
        </div>
    )
}

export default Footer
