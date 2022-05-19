import React from 'react'
import {IoLocationSharp} from 'react-icons/io5'
import {FiSearch} from 'react-icons/fi'

export default function FrontSearch() {
  return (
    <div className='my-8 w-6/12 mx-auto flex h-12 rounded-md bg-white'>
    <div className='w-4/12 my-auto flex'>
        <IoLocationSharp className='text-2xl mx-2 text-themeColor'/>
        <input className='rounded-l-md' placeholder='Location'></input>
    </div>
    <p className='my-auto text-2xl'> | </p>
    <div className='w-8/12 my-auto flex'>
        <FiSearch className='text-2xl mx-2 text-themeColor'/>
        <input className='w-8/12 rounded-r-md' placeholder='Services'></input>
    </div>
        
        
    </div>
  )
}
