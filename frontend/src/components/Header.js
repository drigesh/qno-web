import React from 'react'
import { FaArrowAltCircleDown } from 'react-icons/fa';
export default function Header() {
  return (
      <div className="absolute  w-full text-white z-10">
    <div className='w-9/12 flex mx-auto'>

        <div className='w-3/12 m-3 flex '>
        <FaArrowAltCircleDown className="my-auto mx-2 pt-1 text-xl"/>
        <p className=' hover:underline'>Get the app</p>
        </div>
        <div className='w-9/12 flex justify-end '>
            <div className='hover:underline m-3'>
                LookBook
            </div>
            <div className='hover:underline m-3'>
                Blogs
            </div>
            <div className='hover:underline m-3'>
                Sign In
            </div>
            <div className='hover:underline m-3'>
                Sign up
            </div>
        </div>

    </div>
    </div>
  )
}
