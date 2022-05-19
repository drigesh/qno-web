import React from 'react'

import './FrontPage.css'
import FrontSearch from './FrontSearch'

export default function FrontPage() {
  return (
    <div className='w-full text-center'>
        <div className='w-full absolute'>
            <img src="/images/qno-trans-white.png" alt='qno-image' className='mx-auto mt-32'/>
            <p className='text-white text-2xl font-bold my-4'> Find out where to get the Great Haircut and Salon-services in your Location. </p>
            <FrontSearch />

            

        </div>
        <img src='https://wallpaperaccess.com/full/334700.jpg'  
        alt='bg-image'
        className='w-full h-101'/>
        
    </div>
  )
}
